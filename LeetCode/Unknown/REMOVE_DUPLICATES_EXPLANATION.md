# Remove Duplicates from Sorted Array - Function Signature Explanation

## Is Returning Only an Integer Correct?

**Yes, the return type `-> int` is correct**, but the function must also **modify the array in-place**.

## LeetCode Problem 26 Requirements

The problem asks for:
1. **Modify the array in-place** - Remove duplicates so the first `k` elements are unique
2. **Return `k`** - The count of unique elements

### Expected Behavior:

```python
nums = [1, 1, 2]
k = removeDuplicates(nums)
# After function call:
# nums should be: [1, 2, ...] (first k=2 elements are unique)
# k = 2
```

## Current Implementation Issue

Your current implementation:
```python
def removeDuplicates(self, nums: List[int]) -> int:
    # Only counts unique elements
    # Does NOT modify the array in-place
    return unique_count
```

**Problem:** It counts unique elements but doesn't modify the array.

## Correct Implementation

The function should modify `nums` in-place:

```python
def removeDuplicates(self, nums: List[int]) -> int:
    if len(nums) == 0:
        return 0
    
    # Two-pointer technique
    write_index = 1  # Position to write next unique element
    
    for read_index in range(1, len(nums)):
        # If current element is different from previous
        if nums[read_index] != nums[read_index - 1]:
            nums[write_index] = nums[read_index]  # Write unique element
            write_index += 1
    
    return write_index  # Return count of unique elements
```

## How It Works

```
Initial: [1, 1, 2]
          ↑  ↑
          w  r

Step 1:  [1, 1, 2]  (same, skip)
          ↑     ↑
          w     r

Step 2:  [1, 2, 2]  (different, write)
             ↑  ↑
             w  r

Result:  [1, 2, 2]  (first k=2 elements are unique)
          ↑  ↑
          unique elements
```

## Why Return Type is `int`

- The problem asks for the **count** of unique elements
- LeetCode's test runner checks:
  1. The returned integer (k)
  2. The first k elements of the modified array
- Returning just the count is sufficient because the array is modified in-place

## Summary

✅ **Return type `-> int` is CORRECT**
❌ **But the function must also modify `nums` in-place**

The signature is correct, but the implementation needs to actually modify the array!


