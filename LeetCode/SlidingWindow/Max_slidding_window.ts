//https://leetcode.com/problems/sliding-window-maximum/
function maxSlidingWindow(nums: number[], k: number): number[] {
    var result = new Array();
    var current_max = 0; 
    var current_second_max = 0;
    var left = 0; 
    var right = 0; 
    for(var right = 0; right < nums.length; right++){
        // ko chay den so cuoi
        if(right-left < k - 1){
            // Minh muon process cai right
            current_max = Math.max(nums[right], current_max);
        }
        else if(right - left == k-1){
            result.push(current_max);
        }
        else{            
            // move the left
            left = left + 1;
            if(nums[left] < nums[right]){
                current_max = nums[right];
            }
        }

        return new Array();
    }
};