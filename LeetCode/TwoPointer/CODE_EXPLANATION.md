# Code Explanation: `st == st[::-1]`

## The Code

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        st = str(x)
        return st == st[::-1]
```

## Line-by-Line Breakdown

### 1. `st = str(x)`
- Converts the integer `x` to a string
- Example: `x = 121` → `st = "121"`

### 2. `return st == st[::-1]`
This is the key line! Let's break down `st[::-1]`:

#### Python Slice Notation: `[start:stop:step]`
- `st[:]` - Gets all characters (copy of string)
- `st[::-1]` - Reverses the string!

**How `[::-1]` works:**
- **First `:`** - Start from beginning (default: start of string)
- **Second `:`** - Go to end (default: end of string)  
- **`-1`** - Step backwards by 1 (reverse direction)

#### Examples:

```python
st = "121"
st[::-1]  # Returns "121" (reversed, which is the same)

st = "123"
st[::-1]  # Returns "321" (reversed)

st = "hello"
st[::-1]  # Returns "olleh"
```

### 3. `st == st[::-1]`
- Compares the original string with its reverse
- Returns `True` if they're equal (palindrome)
- Returns `False` if they're different (not a palindrome)

## Complete Example

```python
# Example 1: Palindrome
x = 121
st = str(121)        # "121"
reversed = st[::-1]  # "121"
st == st[::-1]       # "121" == "121" → True ✓

# Example 2: Not a palindrome
x = 123
st = str(123)        # "123"
reversed = st[::-1]  # "321"
st == st[::-1]       # "123" == "321" → False ✗
```

## Comparison with Current Implementation

### Current Implementation (Manual Loop):
```python
def isPalindrome(self, x: int) -> bool:
    x_string = str(x)
    for index in range(len(x_string)//2):
        if(x_string[index] != x_string[len(x_string)-index - 1]):
            return False
    return True
```

**How it works:**
- Loops through half the string
- Compares first character with last, second with second-to-last, etc.
- Returns `False` immediately if mismatch found
- Returns `True` if all comparisons match

### New Implementation (Slice Reversal):
```python
def isPalindrome(self, x: int) -> bool:
    st = str(x)
    return st == st[::-1]
```

**How it works:**
- Creates reversed copy of string
- Compares entire strings at once
- One-line solution!

## Advantages & Disadvantages

### Slice Reversal (`st[::-1]`):
✅ **Pros:**
- Very concise and readable
- Pythonic (uses built-in features)
- Easy to understand

❌ **Cons:**
- Creates a new string (memory overhead)
- Compares entire strings (even if mismatch is at start)
- Slightly less efficient for large strings

### Manual Loop:
✅ **Pros:**
- More memory efficient (no string copy)
- Early exit on first mismatch (potentially faster)
- More control over the algorithm

❌ **Cons:**
- More verbose
- More code to maintain
- Slightly more complex

## Performance Comparison

For **small numbers** (like LeetCode test cases):
- Both are very fast
- Difference is negligible
- Slice version might be slightly slower due to string copy

For **very large numbers** (1000+ digits):
- Manual loop can exit early on mismatch → potentially faster
- Slice version always creates full reversed string → consistent time

## Which is Better?

**For LeetCode/Interviews:**
- Both are acceptable
- Slice version shows Python knowledge
- Manual loop shows algorithm understanding

**For Production:**
- Manual loop is slightly more efficient
- But slice version is more maintainable
- Choose based on your team's style guide

## Visual Representation

```
Input: x = 121

Manual Loop Approach:
"1"  "2"  "1"
 ↑    ↑    ↑
 |    |    |
Compare first with last
Compare second with second-to-last
All match → True

Slice Reversal Approach:
"121" == "121" (reversed)
  ↓        ↓
Original  Reversed
Equal → True
```

## Summary

`st[::-1]` is Python's way of **reversing a string** using slice notation. The code checks if a number is a palindrome by comparing the string representation with its reverse. It's a concise, Pythonic solution!

