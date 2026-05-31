# Understanding `self` in Python

## What is `self`?

`self` is a reference to the **instance** (object) of the class. It's how a method accesses the object it belongs to.

## In Your Code

```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # self refers to the Solution instance
```

## Why is `self` Needed?

When you call a method on an object, Python automatically passes the object as the first argument. `self` is the conventional name for this first parameter.

## How It Works

### Example 1: Basic Usage

```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # self refers to THIS Solution instance
        return "prefix"

# When you call it:
solution = Solution()  # Create an instance
result = solution.longestCommonPrefix(["flower", "flow", "flight"])
# Python automatically does:
# Solution.longestCommonPrefix(solution, ["flower", "flow", "flight"])
#                                    ↑
#                              This is 'self'
```

### Example 2: Accessing Instance Variables

```python
class Solution:
    def __init__(self):
        self.prefix = ""  # Instance variable
    
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Use self to access instance variables
        self.prefix = "common"
        return self.prefix
```

### Example 3: Calling Other Methods

```python
class Solution:
    def helper_method(self, s: str) -> str:
        return s.upper()
    
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Use self to call other methods
        result = self.helper_method("test")
        return result
```

## Visual Representation

```
┌─────────────────────────────────────┐
│         Solution Instance           │
│  ┌──────────────────────────────┐  │
│  │  self (the instance itself)   │  │
│  │                                │  │
│  │  Methods:                      │  │
│  │  - longestCommonPrefix(self)  │  │
│  │                                │  │
│  │  Variables:                    │  │
│  │  - self.prefix                 │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

## What Happens When You Call a Method

```python
solution = Solution()
solution.longestCommonPrefix(["a", "b"])

# Python internally converts this to:
Solution.longestCommonPrefix(solution, ["a", "b"])
#                              ↑
#                        This becomes 'self'
```

## Key Points

1. **`self` is not a keyword** - It's just a convention (you could use any name, but don't!)
2. **Always first parameter** - Instance methods must have `self` as the first parameter
3. **Automatically passed** - You don't pass `self` when calling the method
4. **Access to instance** - Use `self` to access instance variables and methods

## Common Patterns

### Pattern 1: Accessing Instance Variables
```python
class Solution:
    def __init__(self):
        self.count = 0
    
    def increment(self):
        self.count += 1  # Access instance variable
```

### Pattern 2: Calling Other Methods
```python
class Solution:
    def helper(self):
        return "help"
    
    def main(self):
        return self.helper()  # Call other method
```

### Pattern 3: Method Chaining
```python
class Solution:
    def method1(self):
        return self
    
    def method2(self):
        return self
    
# Usage:
solution = Solution()
solution.method1().method2()  # Chain methods
```

## Without `self` (Static Method)

If you don't need `self`, you can use `@staticmethod`:

```python
class Solution:
    @staticmethod
    def longestCommonPrefix(strs: List[str]) -> str:
        # No 'self' needed - this is a static method
        return "prefix"

# Call it without creating an instance:
Solution.longestCommonPrefix(["a", "b"])
```

## Comparison: With vs Without `self`

### With `self` (Instance Method):
```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        return "prefix"

# Must create instance:
solution = Solution()
solution.longestCommonPrefix(["a", "b"])
```

### Without `self` (Static Method):
```python
class Solution:
    @staticmethod
    def longestCommonPrefix(strs: List[str]) -> str:
        return "prefix"

# Can call directly on class:
Solution.longestCommonPrefix(["a", "b"])
```

## In LeetCode Context

For LeetCode problems, you typically use `self` because:
- LeetCode expects instance methods
- The test runner creates a `Solution` instance
- It calls methods on that instance

```python
# LeetCode test runner does something like:
solution = Solution()
result = solution.longestCommonPrefix(["flower", "flow"])
```

## Summary

**`self`** is:
- ✅ A reference to the instance (object) of the class
- ✅ The first parameter of instance methods
- ✅ Automatically passed by Python
- ✅ Used to access instance variables and methods
- ✅ A Python convention (not a keyword)

**Think of it as:** "This instance of the class"

