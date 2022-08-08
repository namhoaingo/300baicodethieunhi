function heapSort(nums: number[]): number[]{
    // create the first max heap 
    for(var i = nums.length - 1; i >= 0; i--){
        heapify(nums, i, nums.length-1);
    }
    for(var i = 0; i < nums.length - 1; i++){
        // swap 
        swap_heap_exer1(nums, 0, nums.length - i - 1);
        heapify(nums, 0, nums.length - i - 2)
    }
    return nums;
}

function heapify(nums: number[], currentIndex: number, rightIndex: number){
       while (true) {
        var leftChildIndex = currentIndex * 2 + 1;
        var rightChildIndex = currentIndex * 2 + 2;
        if(leftChildIndex <= rightIndex && rightChildIndex <= rightIndex){
            // Compare the max to see if we need to swap 
            if(nums[currentIndex] >= Math.max(nums[leftChildIndex], nums[rightChildIndex])){
                break;
            }
            else if(nums[leftChildIndex] > nums[rightChildIndex]){
                swap_heap_exer1(nums, currentIndex, leftChildIndex );
                currentIndex = leftChildIndex;
            }
            else{
                swap_heap_exer1(nums, currentIndex, rightChildIndex);
                currentIndex = rightChildIndex;
            }
        }
        else if (leftChildIndex <= rightIndex){
            if(nums[currentIndex] < nums[leftChildIndex]){
                swap_heap_exer1(nums, currentIndex, leftChildIndex);
                currentIndex = leftChildIndex;
            } else{
                break;
            }
        } else if (rightChildIndex <= rightIndex){
            if(nums[currentIndex] < nums[rightChildIndex]){
                swap_heap_exer1(nums, currentIndex, rightChildIndex);
                currentIndex = rightChildIndex;
            }
            else{
                break;
            }
        } else{
            // case when leftChildIndex and rightChildIndex are both bigger than the right index
            break;
        }
    }    
}

function swap_heap_exer1(nums: number[], a_index: number, b_index: number){
    var temp = nums[a_index];
    nums[a_index] = nums[b_index];
    nums[b_index] = temp;
}

console.log(heapSort([3,2,6,4,100,3,2,1]));