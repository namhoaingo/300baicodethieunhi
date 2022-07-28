//https://leetcode.com/problems/longest-consecutive-sequence/
import HeapSort_loop from '../Algori/Sorting/HeapSort_loop';
function longestConsecutive(nums: number[]): number {
    if(nums.length==0){
        return 0;
    }
    HeapSort_loop(nums);
    var currentMax = 1;
    var currentCount = 1;  
    for(var i = 1; i < nums.length; i++){   
           
        if(nums[i]-nums[i-1]==1){
            currentCount = currentCount+1;
            if(currentCount > currentMax){
                currentMax = currentCount;
            }
        }
        else{
            currentCount = 1;            
        }
        
    }
    return currentMax;
};

var inputs = [100,4,200,1,3,2];

console.log(longestConsecutive(inputs));