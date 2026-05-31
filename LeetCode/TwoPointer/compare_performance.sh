#!/bin/bash

echo "============================================================"
echo "Performance Comparison: Python vs TypeScript"
echo "============================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo -e "${BLUE}Running Python tests...${NC}"
PYTHON_START=$(date +%s%N)
python3 "$SCRIPT_DIR/Valid_Palindrome_python3.py" > /tmp/python_output.txt 2>&1
PYTHON_END=$(date +%s%N)
PYTHON_TIME=$((($PYTHON_END - $PYTHON_START) / 1000000)) # Convert to milliseconds

echo -e "${BLUE}Running TypeScript tests...${NC}"
# Try to compile and run TypeScript
if command -v ts-node &> /dev/null; then
    TS_START=$(date +%s%N)
    ts-node "$SCRIPT_DIR/Valid_Palindrome.ts" > /tmp/ts_output.txt 2>&1
    TS_END=$(date +%s%N)
    TS_TIME=$((($TS_END - $TS_START) / 1000000))
elif command -v node &> /dev/null && command -v tsc &> /dev/null; then
    # Compile first
    tsc "$SCRIPT_DIR/Valid_Palindrome.ts" --outDir "$SCRIPT_DIR/../out" --module commonjs --target ES2022 --skipLibCheck 2>/dev/null
    if [ -f "$SCRIPT_DIR/../out/TwoPointer/Valid_Palindrome.js" ]; then
        TS_START=$(date +%s%N)
        node "$SCRIPT_DIR/../out/TwoPointer/Valid_Palindrome.js" > /tmp/ts_output.txt 2>&1
        TS_END=$(date +%s%N)
        TS_TIME=$((($TS_END - $TS_START) / 1000000))
    else
        echo -e "${YELLOW}Warning: TypeScript compilation failed. Skipping TypeScript tests.${NC}"
        TS_TIME=0
    fi
else
    echo -e "${YELLOW}Warning: TypeScript runtime not found. Install ts-node or node+tsc to run TypeScript tests.${NC}"
    TS_TIME=0
fi

echo ""
echo "============================================================"
echo "Results:"
echo "============================================================"
echo -e "${GREEN}Python execution time:${NC}   ${PYTHON_TIME} ms"
if [ $TS_TIME -gt 0 ]; then
    echo -e "${GREEN}TypeScript execution time:${NC} ${TS_TIME} ms"
    
    if [ $PYTHON_TIME -gt 0 ] && [ $TS_TIME -gt 0 ]; then
        RATIO=$(echo "scale=2; $PYTHON_TIME / $TS_TIME" | bc)
        if (( $(echo "$RATIO > 1" | bc -l) )); then
            echo -e "${YELLOW}TypeScript is ${RATIO}x faster${NC}"
        else
            INVERSE=$(echo "scale=2; 1 / $RATIO" | bc)
            echo -e "${YELLOW}Python is ${INVERSE}x faster${NC}"
        fi
    fi
else
    echo -e "${YELLOW}TypeScript: Not available${NC}"
fi

echo ""
echo "============================================================"
echo "Note:"
echo "============================================================"
echo "These implementations solve different problems:"
echo "  - Python: Checks if an INTEGER is a palindrome"
echo "  - TypeScript: Checks if a STRING (after cleaning) is a palindrome"
echo "============================================================"

