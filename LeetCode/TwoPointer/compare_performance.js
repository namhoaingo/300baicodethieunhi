#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log("=".repeat(60));
console.log("Performance Comparison: Python vs TypeScript");
console.log("=".repeat(60));

// Test data - note: Python tests integers, TypeScript tests strings
// We'll create equivalent test cases for fair comparison
const testCases = {
    small: {
        python: Array.from({ length: 1000 }, (_, i) => i + 1),
        typescript: Array.from({ length: 1000 }, (_, i) => `test${i}`)
    },
    medium: {
        python: Array.from({ length: 100 }, (_, i) => 1000 + i * 100),
        typescript: Array.from({ length: 100 }, (_, i) => `A man a plan a canal Panama ${i}`)
    },
    large: {
        python: [12345678987654321, 98765432123456789],
        typescript: ["A".repeat(1000) + "B" + "A".repeat(1000), "A".repeat(1000) + "BC" + "A".repeat(1000)]
    }
};

function runPythonTest(testName, iterations = 1) {
    const scriptPath = path.join(__dirname, 'Valid_Palindrome_python3.py');
    try {
        const start = process.hrtime.bigint();
        execSync(`python3 "${scriptPath}"`, { 
            encoding: 'utf-8',
            stdio: 'pipe'
        });
        const end = process.hrtime.bigint();
        return Number(end - start) / 1_000_000; // Convert to milliseconds
    } catch (error) {
        console.error(`Python test failed: ${error.message}`);
        return null;
    }
}

function runTypeScriptTest(testName, iterations = 1) {
    const scriptPath = path.join(__dirname, 'Valid_Palindrome.ts');
    try {
        // Compile TypeScript first
        execSync(`npx tsc "${scriptPath}" --outDir "${path.join(__dirname, '..', 'out')}" --module commonjs --target ES2022`, {
            encoding: 'utf-8',
            stdio: 'pipe'
        });
        
        const compiledPath = path.join(__dirname, '..', 'out', 'TwoPointer', 'Valid_Palindrome.js');
        const start = process.hrtime.bigint();
        execSync(`node "${compiledPath}"`, {
            encoding: 'utf-8',
            stdio: 'pipe'
        });
        const end = process.hrtime.bigint();
        return Number(end - start) / 1_000_000; // Convert to milliseconds
    } catch (error) {
        console.error(`TypeScript test failed: ${error.message}`);
        return null;
    }
}

function formatTime(ms) {
    if (ms < 1) {
        return `${(ms * 1000).toFixed(3)} μs`;
    } else if (ms < 1000) {
        return `${ms.toFixed(3)} ms`;
    } else {
        return `${(ms / 1000).toFixed(3)} s`;
    }
}

function compareResults(pythonTime, tsTime, testName) {
    console.log(`\n${testName}:`);
    console.log(`  Python:   ${formatTime(pythonTime)}`);
    console.log(`  TypeScript: ${formatTime(tsTime)}`);
    
    if (pythonTime && tsTime) {
        const ratio = pythonTime / tsTime;
        if (ratio > 1) {
            console.log(`  TypeScript is ${ratio.toFixed(2)}x faster`);
        } else {
            console.log(`  Python is ${(1/ratio).toFixed(2)}x faster`);
        }
    }
}

// Run full test suites
console.log("\n--- Running Full Test Suites ---\n");

const pythonFullTime = runPythonTest("Python Full Suite");
const tsFullTime = runTypeScriptTest("TypeScript Full Suite");

compareResults(pythonFullTime, tsFullTime, "Full Test Suite");

// Summary
console.log("\n" + "=".repeat(60));
console.log("Summary:");
console.log("=".repeat(60));
console.log("Note: These tests include both correctness and performance tests.");
console.log("The implementations solve different problems:");
console.log("  - Python: Checks if an INTEGER is a palindrome");
console.log("  - TypeScript: Checks if a STRING (after cleaning) is a palindrome");
console.log("=".repeat(60));

