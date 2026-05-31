# Python Slice Notation: `st[::-1]` Explained

## Basic Slice Syntax

Python slice notation follows this pattern:
```python
sequence[start:stop:step]
```

Where:
- **`start`** - Index to begin slicing (inclusive)
- **`stop`** - Index to end slicing (exclusive)
- **`step`** - Step size (how many indices to skip)

## Understanding `[::-1]`

```python
st[::-1]
```

This is shorthand for:
```python
st[None:None:-1]
```

Which means:
- **First `:`** - Start from the **end** (when step is negative, defaults to end)
- **Second `:`** - Go to the **beginning** (when step is negative, defaults to start)
- **`-1`** - Step **backwards** by 1 (reverse direction)

## Step-by-Step Breakdown

### When `step` is **positive** (normal):
```python
st = "hello"
st[0:5:1]   # "hello" - from index 0 to 5, step 1
st[0:5:2]   # "hlo"   - from index 0 to 5, step 2 (every other)
```

### When `step` is **negative** (reverse):
```python
st = "hello"
st[::-1]    # "olleh" - reverse entire string
st[4::-1]   # "olleh" - from index 4 backwards to start
st[:0:-1]   # "olle"  - from end backwards to (but not including) index 0
```

## Visual Examples

### Example 1: Basic Reversal
```python
st = "Python"
print(st[::-1])  # Output: "nohtyP"

# What happens:
# P  y  t  h  o  n
# 0  1  2  3  4  5  (indices)
# 
# Reverse order: n, o, h, t, y, P
# Result: "nohtyP"
```

### Example 2: Number Palindrome Check
```python
st = "121"
print(st[::-1])      # "121"
print(st == st[::-1])  # True (palindrome!)

st = "123"
print(st[::-1])      # "321"
print(st == st[::-1])  # False (not palindrome)
```

### Example 3: Partial Reversal
```python
st = "hello"
print(st[4::-1])     # "olleh" - from index 4 backwards to start
print(st[:0:-1])     # "olle"  - from end backwards to (not including) index 0
print(st[3:0:-1])    # "lle"   - from index 3 backwards to (not including) index 0
```

## Common Slice Patterns

### 1. Reverse entire sequence
```python
st = "hello"
st[::-1]        # "olleh"
```

### 2. Get every other character (backwards)
```python
st = "hello"
st[::-2]        # "olh" - every 2nd character in reverse
```

### 3. Reverse from specific index
```python
st = "hello"
st[3::-1]       # "lleh" - from index 3 backwards to start
```

### 4. Reverse up to specific index
```python
st = "hello"
st[:1:-1]       # "oll" - from end backwards to (not including) index 1
```

## How Python Interprets `[::-1]`

When you write `st[::-1]`, Python internally does:

```python
# Equivalent to:
start = None  # When step is negative, None means "end of sequence"
stop = None   # When step is negative, None means "start of sequence"
step = -1     # Go backwards

# So it becomes:
st[None:None:-1]
```

Python's logic:
- If `step` is **negative**:
  - `start = None` → defaults to `len(sequence) - 1` (last index)
  - `stop = None` → defaults to `-1` (before first index)
  - Goes backwards: `len-1, len-2, ..., 1, 0`

## More Examples with Different Data Types

### Strings
```python
"abc"[::-1]           # "cba"
"hello world"[::-1]   # "dlrow olleh"
```

### Lists
```python
[1, 2, 3][::-1]       # [3, 2, 1]
['a', 'b', 'c'][::-1] # ['c', 'b', 'a']
```

### Tuples
```python
(1, 2, 3)[::-1]       # (3, 2, 1)
```

### Numbers (as strings)
```python
str(121)[::-1]        # "121"
str(12345)[::-1]      # "54321"
```

## Comparison Table

| Slice | Meaning | Example with "hello" |
|-------|---------|---------------------|
| `st[:]` | Copy entire sequence | `"hello"` |
| `st[::]` | Copy entire sequence | `"hello"` |
| `st[::-1]` | Reverse entire sequence | `"olleh"` |
| `st[::-2]` | Every 2nd in reverse | `"olh"` |
| `st[2::-1]` | From index 2 backwards to start | `"leh"` |
| `st[:2:-1]` | From end backwards to (not including) index 2 | `"ol"` |

## Memory Considerations

```python
st = "hello"
reversed_st = st[::-1]  # Creates a NEW string object
```

**Important:** Slicing creates a **new object**, it doesn't modify the original:
```python
st = "hello"
reversed_st = st[::-1]
print(st)          # "hello" (unchanged)
print(reversed_st) # "olleh" (new string)
```

## Why Use `[::-1]` for Palindrome Check?

```python
def isPalindrome(x: int) -> bool:
    st = str(x)
    return st == st[::-1]
```

**Advantages:**
- ✅ Concise and readable
- ✅ Pythonic (uses built-in features)
- ✅ Works for any sequence type
- ✅ No loop needed

**Disadvantages:**
- ❌ Creates a new string (memory overhead)
- ❌ Compares entire strings (no early exit)
- ❌ Slightly slower for very large strings

## Alternative: Manual Reversal

```python
# Using slice (what we're explaining)
st[::-1]

# Equivalent manual approach
''.join(reversed(st))

# Or using a loop
''.join(st[i] for i in range(len(st)-1, -1, -1))
```

## Practice Examples

Try to predict the output:

```python
# Example 1
"racecar"[::-1]      # ?

# Example 2
"12345"[::-1]        # ?

# Example 3
"Python"[::-1]       # ?

# Example 4
"hello"[4::-1]       # ?

# Example 5
"hello"[:0:-1]      # ?
```

**Answers:**
1. `"racecar"` (palindrome!)
2. `"54321"`
3. `"nohtyP"`
4. `"olleh"` (from index 4 backwards)
5. `"olle"` (from end to index 0, exclusive)

## Summary

**`st[::-1]` means:**
- Take the entire sequence (`st[:]`)
- But step backwards by 1 (`::-1`)
- Result: **Reversed sequence**

It's Python's elegant way to reverse any sequence (string, list, tuple) in one line!

