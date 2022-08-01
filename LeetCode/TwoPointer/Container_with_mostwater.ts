
//https://leetcode.com/problems/container-with-most-water/
/**
 * Sort array 
 * giu 1 cai dictionary có chứ các index của các số
 *  tim hieu min và hieu max
 * 
 */
function maxArea_wrong_approach(height: number[]): number {
    var originalHeight = Object.assign({}, height);
    // create a dictionary to container the number and index
    // key is the number
    // value is an array which contain the index
    var dict = {};
    
    for(var i = 0; i < height.length; i++){
        if(!dict[height[i]]){
            dict[height[i]] = new Array();
        }
        dict[height[i]].push(i);
    }

    // have a sorted array
    heap_sort_containerwithwater(height)

    // principle is the min of sorted array
    // max of the array

    
    return null;
    
};

// Region Sorting 
function heap_sort_containerwithwater(numbers: number[]){
    // first make a heap
    for (var i = numbers.length - 1; i >= 0; i--){
        heapify_containerwithwater(numbers, i, numbers.length -1);
    }

    // sort the list 
    var last_index = numbers.length - 1;
    for (var index = 0; index < numbers.length-1; index++){
        // swap 0 with the last index
        swap_container_with_most_water(numbers, 0, last_index);
        last_index = last_index - 1;

        // swap with the first, we need to check the first
        heapify_containerwithwater(numbers, 0, last_index);
    }
}

function heapify_containerwithwater(number: number[], current_index: number, end_index:number){
    while(true){
        var left_index = current_index * 2 + 1;
        var right_index = current_index * 2 + 2;

        if(left_index <= end_index && right_index <= end_index){
            if(number[current_index] > Math.max(number[left_index], number[right_index]))
            {
                break;
            }
            else
            {
                if(number[left_index] > number[right_index]){
                    swap_container_with_most_water(number, current_index, left_index);
                    current_index = left_index;
                }
                else{
                    swap_container_with_most_water(number, current_index, right_index);
                    current_index = right_index;
                }
            }
        }
        else if (left_index > end_index){
        // left index da qua lown 
        // ko can check cai gi, return luon 
            break;
        } 
        else if (left_index <= end_index && number[current_index] < number[left_index]){
            swap_container_with_most_water(number, current_index, left_index);
            current_index = left_index;
        }
        else if(right_index > end_index){
            break;
        }
        else if (right_index <= end_index && number[current_index] < number[right_index]){
            swap_container_with_most_water(number, current_index, right_index);
            current_index = right_index;
        }        
    }
}

function swap_container_with_most_water(number: number[], index_a: number, index_b: number){
    var temp = number[index_a];
    number[index_a] = number[index_b];
    number[index_b] = temp;
}
// Sorting End


// Region test
maxArea([1,8,6,2,5,4,8,3,7]);
// End Test