# Modifying a List In-Place During a For Loop

## The Problem

When you modify a list while iterating over it, you can get unexpected behavior:

```python
# ❌ BAD: Modifying list while iterating
nums = [1, 2, 3, 4, 5]
for num in nums:
    if num == 2:
        nums.remove(num)  # Modifying list during iteration
print(nums)  # Might skip elements or cause errors
```

## Solutions

### Solution 1: Iterate by Index (Recommended for In-Place Modification)

```python
# ✅ GOOD: Iterate by index
nums = [1, 2, 3, 4, 5]
for i in range(len(nums)):
    if nums[i] == 2:
        nums[i] = 999  # Modify in-place
        # Changes are reflected in next iteration
```

**Key Points:**
- Use `range(len(nums))` to get indices
- Access elements with `nums[i]`
- Modifications are immediately reflected

### Solution 2: Two-Pointer Technique (For Remove Duplicates)

```python
# ✅ BEST for remove duplicates
def removeDuplicates(nums):
    if len(nums) == 0:
        return 0
    
    write_index = 1  # Where to write next unique element
    
    # Read pointer moves through entire array
    for read_index in range(1, len(nums)):
        if nums[read_index] != nums[read_index - 1]:
            nums[write_index] = nums[read_index]  # Write in-place
            write_index += 1
    
    return write_index
```

**How it works:**
- `read_index`: Reads through all elements
- `write_index`: Writes unique elements to correct positions
- Modifications happen at specific indices

### Solution 3: Iterate Backwards (When Removing Elements)

```python
# ✅ GOOD: Iterate backwards when removing
nums = [1, 2, 3, 4, 5]
for i in range(len(nums) - 1, -1, -1):  # Backwards
    if nums[i] == 2:
        nums.pop(i)  # Safe to remove
```

**Why backwards?**
- Removing elements shifts indices
- Going backwards avoids index issues

### Solution 4: While Loop with Manual Index Control

```python
# ✅ GOOD: Manual index control
nums = [1, 2, 3, 4, 5]
i = 0
while i < len(nums):
    if nums[i] == 2:
        nums[i] = 999  # Modify
        # Don't increment if you want to check same index again
    else:
        i += 1  # Only increment if not modifying
```

## Example: Remove Duplicates In-Place

### Visual Walkthrough

```
Initial: [1, 1, 2]
          ↑  ↑
          w  r  (write_index=1, read_index=1)

Step 1:   nums[1] == nums[0]? Yes (1 == 1)
          Skip, don't write
          [1, 1, 2]
          ↑     ↑
          w     r  (read_index moves to 2)

Step 2:   nums[2] != nums[1]? Yes (2 != 1)
          Write: nums[1] = nums[2]
          [1, 2, 2]
             ↑  ↑
             w  r  (write_index moves to 2)

Result:   First 2 elements are unique: [1, 2, ...]
```

### Code Implementation

```python
def removeDuplicates(nums):
    if len(nums) == 0:
        return 0
    
    write_index = 1
    
    # Iterate through array starting from index 1
    for read_index in range(1, len(nums)):
        # If current element is different from previous
        if nums[read_index] != nums[read_index - 1]:
            # Write unique element to write_index position
            nums[write_index] = nums[read_index]
            # Move write pointer forward
            write_index += 1
    
    return write_index  # Return count of unique elements
```

## Common Mistakes

### ❌ Mistake 1: Using `for item in list`
```python
# BAD: Can't reliably modify while iterating
for num in nums:
    nums.remove(num)  # Skips elements!
```

### ❌ Mistake 2: Creating New List
```python
# BAD: Doesn't modify original
new_nums = []
for num in nums:
    if condition:
        new_nums.append(num)
# Original nums unchanged
```

### ❌ Mistake 3: Using List Comprehension During Iteration
```python
# BAD: Creates new list, doesn't modify in-place
nums = [x for x in nums if condition]
```

## Best Practices

1. **Use index-based iteration** when modifying in-place
2. **Use two-pointer technique** for problems like remove duplicates
3. **Iterate backwards** when removing elements
4. **Track write position separately** from read position

## Summary

**To modify a list in-place during iteration:**

✅ **Use:** `for i in range(len(nums)):`
✅ **Access:** `nums[i]`
✅ **Modify:** `nums[i] = value` or `nums[write_index] = nums[read_index]`
✅ **Changes are reflected** in next iteration

**For remove duplicates specifically:**
- Use two-pointer technique
- `read_index` scans entire array
- `write_index` writes unique elements
- Both use index-based access


