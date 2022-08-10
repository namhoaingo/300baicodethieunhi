//https://leetcode.com/problems/binary-search/
function serachBasicBinary(nums: number[], target: number): number {
    var start = 0;
    var end = nums.length - 1;

    while(true){
        var mid = Math.floor((end + start)/2);
        if(mid == start){
            return nums[mid] == target ? mid : nums[end] == target ? end : -1;
            break;
        }
        else if (nums[mid] > target){
                end = mid -1;
            }
            else {
                start = mid;
            }
        }
};

console.log(serachBasicBinary([-1,0,3,5,9,12], 9));

//Runtime: 86 ms, faster than 80.26% of TypeScript online submissions for Binary Search.
//Memory Usage: 45.7 MB, less than 77.45% of TypeScript online submissions for Binary Search.