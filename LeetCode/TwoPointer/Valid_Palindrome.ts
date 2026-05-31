//https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
    // regular expression
    var expre = /[^a-z0-9]/gi;
    var cleaString = s.replace(expre, "").toLowerCase();
    
    if(cleaString.length==0 || cleaString.length==1){
        return true;
    }

    if(cleaString.length%2 == 1){
        // odd case
        var left = cleaString.length/2;
        var right = cleaString.length/2;
        for(var i = 0; i< cleaString.length/2; i++){
            if(cleaString.charAt(left - i) != cleaString.charAt(right+i))
            {
                return false;
            }
        }
    }
    else{
    // even case 
        var left = cleaString.length/2 -1;
        var right = cleaString.length/2;
        for(var i = 0; i< cleaString.length/2; i++){
            if(cleaString.charAt(left - i) != cleaString.charAt(right+i))
            {
                return false;
            }
        }
    }
    return true;
};

// Test cases for correctness
class TestValidPalindrome {
    private solution = isPalindrome;
    private passed: number = 0;
    private failed: number = 0;

    private assert(condition: boolean, testName: string): void {
        if (condition) {
            this.passed++;
            console.log(`✓ ${testName}`);
        } else {
            this.failed++;
            console.error(`✗ ${testName} - FAILED`);
        }
    }

    private assertTrue(result: boolean, testName: string): void {
        this.assert(result === true, testName);
    }

    private assertFalse(result: boolean, testName: string): void {
        this.assert(result === false, testName);
    }

    runAllTests(): void {
        console.log("\n=== Correctness Tests ===\n");
        
        // Single character palindromes
        this.assertTrue(this.solution("a"), "Single character");
        this.assertTrue(this.solution("A"), "Single uppercase character");
        this.assertTrue(this.solution("0"), "Single digit");
        
        // Two character palindromes
        this.assertTrue(this.solution("aa"), "Two character palindrome");
        this.assertTrue(this.solution("11"), "Two digit palindrome");
        this.assertFalse(this.solution("ab"), "Two character non-palindrome");
        
        // Three character palindromes
        this.assertTrue(this.solution("aba"), "Three character palindrome");
        this.assertTrue(this.solution("121"), "Three digit palindrome");
        this.assertFalse(this.solution("abc"), "Three character non-palindrome");
        this.assertFalse(this.solution("123"), "Three digit non-palindrome");
        
        // Four character palindromes
        this.assertTrue(this.solution("abba"), "Four character palindrome");
        this.assertTrue(this.solution("1221"), "Four digit palindrome");
        this.assertFalse(this.solution("abcd"), "Four character non-palindrome");
        
        // Palindromes with spaces and punctuation
        this.assertTrue(this.solution("A man a plan a canal Panama"), "Palindrome with spaces");
        this.assertFalse(this.solution("race a car"), "Non-palindrome with spaces");
        this.assertTrue(this.solution("Was it a car or a cat I saw?"), "Palindrome with punctuation");
        
        // Empty and single character
        this.assertTrue(this.solution(""), "Empty string");
        this.assertTrue(this.solution(" "), "String with only spaces");
        
        // Mixed case
        this.assertTrue(this.solution("Aba"), "Mixed case palindrome");
        this.assertTrue(this.solution("A1a"), "Mixed alphanumeric palindrome");
        
        // Large palindromes
        this.assertTrue(this.solution("1234321"), "Large numeric palindrome");
        this.assertTrue(this.solution("abcdefedcba"), "Large alphabetic palindrome");
        this.assertFalse(this.solution("1234567"), "Large numeric non-palindrome");
        
        // Palindromes with special characters
        this.assertTrue(this.solution("Madam, I'm Adam"), "Palindrome with punctuation");
        this.assertTrue(this.solution("No 'x' in Nixon"), "Palindrome with quotes");
        
        console.log(`\nCorrectness Tests: ${this.passed} passed, ${this.failed} failed\n`);
    }
}

// Performance tests
class TestValidPalindromePerformance {
    private solution = isPalindrome;

    private timeFunction(func: () => void): number {
        // Use Date.now() for timing (works in both Node.js and browser)
        const start = Date.now();
        func();
        const end = Date.now();
        return end - start; // Returns milliseconds
    }

    runPerformanceTests(): void {
        console.log("\n=== Performance Tests ===\n");

        // Test 1: Small strings
        const smallStrings = Array.from({ length: 1000 }, (_, i) => `test${i}`);
        const smallTime = this.timeFunction(() => {
            smallStrings.forEach(s => this.solution(s));
        });
        console.log(`Small strings (1000): ${smallTime.toFixed(3)} ms`);

        // Test 2: Medium strings
        const mediumStrings = Array.from({ length: 100 }, (_, i) => 
            `A man a plan a canal Panama ${i}`
        );
        const mediumTime = this.timeFunction(() => {
            mediumStrings.forEach(s => this.solution(s));
        });
        console.log(`Medium strings (100): ${mediumTime.toFixed(3)} ms`);

        // Test 3: Large palindromes
        const largePalindrome = "A".repeat(10000) + "B" + "A".repeat(10000);
        const largeNonPalindrome = "A".repeat(10000) + "B" + "C" + "A".repeat(10000);
        
        const largePalindromeTime = this.timeFunction(() => {
            for (let i = 0; i < 1000; i++) {
                this.solution(largePalindrome);
            }
        });
        console.log(`Large palindrome (1000 iterations): ${largePalindromeTime.toFixed(3)} ms`);

        const largeNonPalindromeTime = this.timeFunction(() => {
            for (let i = 0; i < 1000; i++) {
                this.solution(largeNonPalindrome);
            }
        });
        console.log(`Large non-palindrome (1000 iterations): ${largeNonPalindromeTime.toFixed(3)} ms`);

        // Test 4: Edge cases
        const edgeCases = ["", " ", "a", "aa", "ab", "A man a plan a canal Panama"];
        const edgeTime = this.timeFunction(() => {
            for (let i = 0; i < 10000; i++) {
                edgeCases.forEach(s => this.solution(s));
            }
        });
        console.log(`Edge cases (10000 iterations each): ${edgeTime.toFixed(3)} ms`);

        // Test 5: Palindrome vs non-palindrome comparison
        const palindrome = "A man a plan a canal Panama";
        const nonPalindrome = "race a car";
        
        const palindromeTime = this.timeFunction(() => {
            for (let i = 0; i < 10000; i++) {
                this.solution(palindrome);
            }
        });
        
        const nonPalindromeTime = this.timeFunction(() => {
            for (let i = 0; i < 10000; i++) {
                this.solution(nonPalindrome);
            }
        });
        
        console.log(`\nPalindrome (10000 iterations): ${palindromeTime.toFixed(3)} ms`);
        console.log(`Non-palindrome (10000 iterations): ${nonPalindromeTime.toFixed(3)} ms`);
    }
}

// Run tests
// Note: This will run when the file is executed directly
// To prevent execution when imported, wrap in a check if needed
try {
    const correctnessTests = new TestValidPalindrome();
    correctnessTests.runAllTests();
    
    const performanceTests = new TestValidPalindromePerformance();
    performanceTests.runPerformanceTests();
} catch (e) {
    // Ignore errors if running in non-Node environment
}

export { isPalindrome, TestValidPalindrome, TestValidPalindromePerformance };