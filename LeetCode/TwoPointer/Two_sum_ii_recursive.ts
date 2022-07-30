//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
function twoSum_II_recursive(numbers: number[], target: number): number[] {
    var result = new Array();
    var smallest = numbers[0];
    var biggest = numbers[numbers.length-1];
    for (var current_index = 0; current_index < numbers.length; current_index++){
        
        var other_number = target - numbers[current_index];
        if(other_number< smallest || other_number > biggest){
            continue;
        } else
        {
            var index = find_in_sum_recursive(numbers, other_number, 0, numbers.length -1) 
            if(index != -1){
                result = [current_index + 1, current_index == index ? current_index + 2: index + 1]; 
                break;
            }
        }
    }

    return result;
};

// recursive
function find_in_sum_recursive(numbers: number[], looking_num: number, 
                    start_index: number, end_index: number): number{
    // if found return the number
    // if not, return -1   
    
    if(start_index == end_index)
    { 
        if(numbers[start_index] != looking_num){
            return -1;
        }
        else{
            return start_index;
      }
    }

    var mid_index =  Math.floor((end_index + start_index)/2);
    // odd
    if(looking_num == numbers[mid_index]){
        return mid_index;
    }
    else if(looking_num > numbers[mid_index]){
        return find_in_sum_recursive(numbers, looking_num, mid_index + 1, end_index);
    }
    else if(looking_num<numbers[mid_index]){
        return find_in_sum_recursive(numbers, looking_num, start_index, mid_index - 1);
    }
}

// var inputs = [1,2,3,4,4,9,56,90];
// console.log(twoSum_II(inputs, 8))