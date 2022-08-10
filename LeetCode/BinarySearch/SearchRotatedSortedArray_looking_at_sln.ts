//https://leetcode.com/problems/search-in-rotated-sorted-array/
// This is one of the hardest problem that I have ever done
function search(nums: number[], target: number): number {
    var start_index = 0;
    var end_index = nums.length - 1;

    while(start_index <= end_index){
        var start_num = nums[start_index];
        var end_num = nums[end_index];
        var mid_index = Math.floor((start_index + end_index) / 2);
        var mid_num = nums[mid_index];

        if(mid_num == target){
            return mid_index;
        }
        // we are in the left sorted array
         if(start_num <= mid_num){
            if(target > mid_num){
                start_index = mid_index + 1;
            }
            else if(target < start_num){
                start_index = mid_index + 1;
            }
            else{
                end_index = mid_index - 1;
            }
        }
        else{
            // we are in the right sorted array
            if(target < mid_num){
                end_index = mid_index - 1;
            } else if (target > end_num){
                end_index = mid_index - 1;
            } else{
                start_index = mid_index + 1
            }
        }
        
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));