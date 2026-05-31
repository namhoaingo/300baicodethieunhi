# Python: Pass by Value or Pass by Reference?

## Short Answer

**Python uses "Pass by Object Reference"** (also called "Call by Sharing"). It's neither pure pass-by-value nor pure pass-by-reference.

## What This Means

- **Immutable objects** (int, str, tuple): Act like **pass-by-value**
- **Mutable objects** (list, dict, set): Act like **pass-by-reference**

## Key Concept: Object References

In Python, variables are **references** to objects, not the objects themselves.

```python
nums = [1, 2, 3]
# 'nums' is a reference pointing to a list object
```

## Examples

### Example 1: Mutable Objects (Lists) - "Pass by Reference"

```python
def modify_list(lst):
    lst.append(4)  # Modifies the original list
    lst[0] = 999   # Modifies the original list

my_list = [1, 2, 3]
modify_list(my_list)
print(my_list)  # [999, 2, 3, 4] ✅ Original is modified!
```

**Why?** Both `my_list` and `lst` point to the **same list object** in memory.

### Example 2: Immutable Objects (Integers) - "Pass by Value"

```python
def modify_int(x):
    x = x + 1  # Creates a NEW integer object
    print(f"Inside function: {x}")

my_int = 5
modify_int(my_int)
print(f"Outside function: {my_int}")  # Still 5 ✅ Not modified!
```

**Why?** Integers are immutable. `x = x + 1` creates a **new integer object**, doesn't modify the original.

### Example 3: Strings (Immutable)

```python
def modify_string(s):
    s = s + " world"  # Creates a NEW string object
    print(f"Inside: {s}")

my_string = "hello"
modify_string(my_string)
print(f"Outside: {my_string}")  # Still "hello" ✅ Not modified!
```

### Example 4: Reassignment vs Modification

```python
def reassign_list(lst):
    lst = [4, 5, 6]  # Creates NEW list, doesn't modify original
    print(f"Inside: {lst}")

def modify_list(lst):
    lst.append(4)  # Modifies original list
    print(f"Inside: {lst}")

my_list = [1, 2, 3]

reassign_list(my_list)
print(f"After reassign: {my_list}")  # [1, 2, 3] ✅ Not changed

modify_list(my_list)
print(f"After modify: {my_list}")  # [1, 2, 3, 4] ✅ Changed!
```

**Key Difference:**
- `lst.append()` → Modifies the object → Original changes
- `lst = [...]` → Creates new object → Original unchanged

## Visual Representation

```
# Mutable Object (List)
my_list = [1, 2, 3]
         ↓
    [List Object]
         ↑
def func(lst):  # lst points to same object
    lst.append(4)  # Modifies the object
    # Both my_list and lst see the change!

# Immutable Object (Int)
my_int = 5
         ↓
    [Int Object: 5]
         ↑
def func(x):  # x points to same object
    x = x + 1  # Creates NEW Int Object: 6
    # x now points to new object
    # my_int still points to original (5)
```

## For Your removeDuplicates Function

```python
def removeDuplicates(self, nums: List[int]) -> int:
    # nums is a reference to the original list
    nums[write_index] = nums[read_index]  # Modifies the original!
    return write_index

# When you call it:
my_nums = [1, 1, 2]
solution.removeDuplicates(my_nums)
# my_nums is modified because lists are mutable!
```

**Why it works:**
- `nums` parameter is a reference to the same list object
- Modifying `nums[write_index]` modifies the original list
- No copy is made

## Common Misconceptions

### ❌ Misconception 1: "Python is pass-by-value"
```python
def test(lst):
    lst.append(1)

my_list = []
test(my_list)
print(my_list)  # [1] - If it were pass-by-value, this would be []
```

### ❌ Misconception 2: "Python is pass-by-reference"
```python
def test(x):
    x = x + 1

my_int = 5
test(my_int)
print(my_int)  # 5 - If it were pass-by-reference, this would be 6
```

### ✅ Correct Understanding: "Pass by Object Reference"
- Variables are references to objects
- Mutable objects can be modified through the reference
- Immutable objects cannot be modified (operations create new objects)

## Summary Table

| Object Type | Mutable? | Behavior | Example |
|------------|---------|----------|---------|
| `list` | ✅ Yes | Modified in function | `lst.append(1)` changes original |
| `dict` | ✅ Yes | Modified in function | `d['key'] = value` changes original |
| `set` | ✅ Yes | Modified in function | `s.add(1)` changes original |
| `int` | ❌ No | Not modified | `x = x + 1` creates new object |
| `str` | ❌ No | Not modified | `s = s + "x"` creates new object |
| `tuple` | ❌ No | Not modified | Cannot modify tuples |

## Best Practices

1. **For mutable objects:** Be aware that modifications affect the original
2. **To avoid side effects:** Make a copy if needed:
   ```python
   def func(lst):
       lst = lst.copy()  # Work with copy
       lst.append(1)
   ```
3. **For immutable objects:** No need to worry about side effects

## Conclusion

Python uses **"Pass by Object Reference"**:
- ✅ Mutable objects (lists, dicts) can be modified → Acts like pass-by-reference
- ✅ Immutable objects (ints, strings) cannot be modified → Acts like pass-by-value
- ✅ The key is understanding that variables are **references** to objects

