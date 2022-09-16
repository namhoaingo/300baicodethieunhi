//https://leetcode.com/problems/kth-largest-element-in-an-array/

// Using Quick Select
//  ----> Quick select advance from the left will give the th biggest number
//  ----> Quick Select adanve from the right will give the th smallest number
// Base on the th biggest/smaller to go to left or right

// Quick select : base on the structure of the given array
// put an index in the correct position of the sorted array
function findKthLargest(nums: number[], k: number): number {
    return select_quickSelect(nums, 0, nums.length-1, k);
};

function select_quickSelect(nums: Array<number>, leftIndex: number, rightIndex: number, k: number): number{
    let randomPivotIndex = partition(nums, leftIndex, rightIndex);
    let thBigest = nums.length - randomPivotIndex;
    if(thBigest ==  k){
        return nums[randomPivotIndex];
    }else if(k < thBigest){
        return select_quickSelect(nums, randomPivotIndex+1, rightIndex, k);
    }else{
        return select_quickSelect(nums, leftIndex, randomPivotIndex-1, k);
    }
}

function partition(nums: Array<number>, leftIndex: number, rightIndex: number): number{
    while(rightIndex > leftIndex){

        if(nums[rightIndex] <= nums[rightIndex-1]){
            swapA_B_quick_select(nums, rightIndex, rightIndex-1);
            rightIndex--;
        }
        else if(nums[leftIndex] < nums[rightIndex]){
            leftIndex++;
        }
        else{
            //swap ở đây để lôp sau sẽ xử lý ở cái if đàu tiên
            swapA_B_quick_select(nums, rightIndex-1, leftIndex);
        }
    
    }
    return rightIndex;
}

function swapA_B_quick_select(nums: Array<number>, index_a: number, index_b: number){
    let temp = nums[index_a];
    nums[index_a] = nums[index_b];
    nums[index_b] = temp;
}

//1,2,3,4,5,6

let result215 = findKthLargest([3,2,1,5,6,4], 6);
console.log(result215);

//Runtime: 229 ms, faster than 49.67% of TypeScript online submissions for Kth Largest Element in an Array.
//Memory Usage: 50.3 MB, less than 84.33% of TypeScript online submissions for Kth Largest Element in an Array.