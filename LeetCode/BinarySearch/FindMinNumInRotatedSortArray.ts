//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums: number[]): number {
    var left_index = 0;
    var right_index = nums.length - 1;
    while(nums[left_index] > nums[right_index]){
        if(left_index == right_index - 1){
            return Math.min(nums[left_index], nums[right_index]);
        }
        var mid_index = Math.floor((left_index + right_index) /2 );
        if(nums[left_index] >= nums[mid_index]){
            // the left is sorted, should look at the right
            right_index = mid_index;
        }
        else{
            left_index = mid_index;
        }
    }
    return nums[left_index];
};

console.log(findMin([3,1,2]));
//Runtime: 94 ms, faster than 65.19% of TypeScript online submissions for Find Minimum in Rotated Sorted Array.
//Memory Usage: 44.3 MB, less than 30.39% of TypeScript online submissions for Find Minimum in Rotated Sorted Array.