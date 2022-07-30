//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
function twoSum_II_iterative(numbers: number[], target: number): number[] {
 
    var max = numbers[numbers.length - 1];
    var min = numbers[0];
    var result = new Array();
    for(var index = 0; index < numbers.length; index++){
        var other_number = target - numbers[index];

        if(result.length > 0){
            return result;
        }
        if(other_number > max || other_number < min){
            continue;
        }
        else{
            var start_index = 0; 
            var end_index = numbers.length-1;
            while(true){                
                var mid_index = Math.floor((end_index + start_index)/2);

                // Check xem even
                if(start_index == end_index)
                {
                    if(other_number == numbers[start_index])
                    {
                        result = [index + 1, start_index + 1];
                        break;
                    }
                    else{
                        break;
                    }
                }
                else if (start_index = end_index + 1){

                }
                
                if(numbers[mid_index] == other_number){
                    result = [index + 1, mid_index == index ? mid_index + 2 : mid_index + 1];
                    break;
                }
                else if(numbers[mid_index] > other_number){
                    // giu nguyen start index
                    end_index = mid_index - 1;
                } else if (numbers[mid_index] <= other_number){
                    start_index = mid_index;
                }
            }
        }
    }
    return result;
};

// var inputs = [1,2,3,4,4,9,56,90];
// console.log(twoSum_II_iterative(inputs, 8))