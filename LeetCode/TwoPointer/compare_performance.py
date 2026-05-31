#!/usr/bin/env python3
"""
Performance comparison script for Python and TypeScript implementations
of palindrome checking algorithms.
"""

import subprocess
import time
import os
import sys
from pathlib import Path

def run_command(cmd, capture_output=True):
    """Run a shell command and return the execution time in milliseconds."""
    try:
        start = time.perf_counter()
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=capture_output,
            text=True,
            timeout=30
        )
        end = time.perf_counter()
        elapsed_ms = (end - start) * 1000
        return elapsed_ms, result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return None, False, "", "Command timed out"
    except Exception as e:
        return None, False, "", str(e)

def main():
    script_dir = Path(__file__).parent
    
    print("=" * 60)
    print("Performance Comparison: Python vs TypeScript")
    print("=" * 60)
    print()
    
    # Run Python tests
    print("Running Python tests...")
    python_script = script_dir / "Valid_Palindrome_python3.py"
    python_time, python_success, python_out, python_err = run_command(
        f'python3 "{python_script}"'
    )
    
    if python_success:
        print(f"✓ Python tests completed")
    else:
        print(f"✗ Python tests failed: {python_err}")
    
    # Run TypeScript tests
    print("Running TypeScript tests...")
    ts_script = script_dir / "Valid_Palindrome.ts"
    
    # Try ts-node first
    ts_time = None
    ts_success = False
    
    # Check for ts-node
    ts_node_check, _, _, _ = run_command("which ts-node", capture_output=True)
    if ts_node_check is not None:
        ts_time, ts_success, ts_out, ts_err = run_command(
            f'ts-node "{ts_script}"'
        )
        if ts_success:
            print(f"✓ TypeScript tests completed (using ts-node)")
        else:
            print(f"✗ TypeScript tests failed with ts-node: {ts_err}")
    
    # If ts-node failed or not available, try compiling with tsc
    if not ts_success:
        out_dir = script_dir.parent / "out"
        out_dir.mkdir(exist_ok=True)
        
        # Compile TypeScript
        compile_cmd = f'tsc "{ts_script}" --outDir "{out_dir}" --module commonjs --target ES2022 --skipLibCheck'
        compile_time, compile_success, _, compile_err = run_command(compile_cmd)
        
        if compile_success:
            compiled_js = out_dir / "TwoPointer" / "Valid_Palindrome.js"
            if compiled_js.exists():
                ts_time, ts_success, ts_out, ts_err = run_command(
                    f'node "{compiled_js}"'
                )
                if ts_success:
                    print(f"✓ TypeScript tests completed (compiled)")
                else:
                    print(f"✗ TypeScript execution failed: {ts_err}")
            else:
                print(f"✗ Compiled file not found at {compiled_js}")
        else:
            print(f"✗ TypeScript compilation failed: {compile_err}")
            print("  Note: Install TypeScript compiler: npm install -g typescript")
    
    # Display results
    print()
    print("=" * 60)
    print("Results:")
    print("=" * 60)
    
    if python_time is not None:
        print(f"Python execution time:   {python_time:.3f} ms")
    else:
        print("Python execution time:   N/A")
    
    if ts_time is not None:
        print(f"TypeScript execution time: {ts_time:.3f} ms")
        
        if python_time is not None and python_time > 0 and ts_time > 0:
            ratio = python_time / ts_time
            if ratio > 1:
                print(f"TypeScript is {ratio:.2f}x faster")
            else:
                print(f"Python is {1/ratio:.2f}x faster")
    else:
        print("TypeScript execution time: N/A")
        print("  Note: Install ts-node or node+tsc to run TypeScript tests")
    
    print()
    print("=" * 60)
    print("Note:")
    print("=" * 60)
    print("These implementations solve different problems:")
    print("  - Python: Checks if an INTEGER is a palindrome")
    print("  - TypeScript: Checks if a STRING (after cleaning) is a palindrome")
    print("=" * 60)

if __name__ == "__main__":
    main()

