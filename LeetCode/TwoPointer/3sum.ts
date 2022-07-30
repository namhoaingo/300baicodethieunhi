//https://leetcode.com/problems/3sum/


// Not complete yet, this is too hard, need to spend more time thinking about this
// Test cach dict truoc 
function threeSum_cal(nums: number[]): number[][] {
    // convert to dict
    // Dict will has the key as number
    // Dict will have the value as index
    var dict = {};
    for(var index = 0; index < nums.length; index++){
        if(!dict[nums[index]]){
            dict[nums[index]] = index;
        }       
    }
    
    // Sort the list 
    for(var i = nums.length - 1; i >= 0; i--){
        // Loop cho tat ca cac so 
        heap_sort_array(nums, i, nums.length-1);
        // sau khi sort thi se co array voi 
        // gia tri 0 la lon nhat

    }

    // loop tiep de thay doi gia tri 
    var current_max_index = nums.length - 1;
    for(var index = 0; index < nums.length; index++){
        heap_sort_swap(nums, 0, current_max_index);
        // VI moi  thay đổi vị trí index 0, nên 
        // ta cần chỉnh sửa lai nó
        heap_sort_array(nums, 0 , current_max_index-1)
        current_max_index = current_max_index - 1;
    }

    
    for(var index = 0; index < nums.length; index ++){
        //var newArray = nums.filter()
    }
    return null
};

// Heap Sort using loop
// make sure the current_index is put in the right place
// according to the max index as well
// DONOT go beyond the max index
// ONLY take care of 1 index at a time
function heap_sort_array(numbers: number[], current_index: number, max_index: number){    
    while(true){
        var left_index  = current_index * 2 + 1;
        var right_index = current_index * 2 + 2;
        if(left_index <= max_index && right_index <= max_index){
            if(numbers[current_index] >= Math.max(numbers[left_index], numbers[right_index])) break;
            else{
                if(numbers[left_index] < numbers[right_index]){
                    // Swap current index with right, because right is bigger
                    heap_sort_swap(numbers, current_index, right_index);
                    current_index = right_index;
                }
                else{
                    // Swap current index with left, because left is nigger
                    heap_sort_swap(numbers, current_index, left_index);
                    current_index = left_index;
                }
            }
        }

        // Trái đã lớn hơn max rồi, thì cần gì phải check right
        // nên break right ây
        else if(left_index > max_index)
        {
            break;
        }
        else if (numbers[current_index] < numbers[left_index]){
            heap_sort_swap(numbers, current_index, left_index);
            current_index = left_index;
        }
        else if(right_index > max_index){
            break;
        }
        else if(numbers[current_index] < numbers[right_index]){
            heap_sort_swap(numbers, current_index, right_index);
            current_index = right_index;
        }
    }
}

function heap_sort_swap(numbers:number[], index_a: number, index_b: number){
    var temp = numbers[index_a];
    numbers[index_a] = numbers[index_b];
    numbers[index_b] = temp;
}

var inputs = [-1,0,1,2,-1,-4];
threeSum_cal(inputs);