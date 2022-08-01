//https://leetcode.com/problems/trapping-rain-water/
/**
 * Understanding the problem
 * two pointer, left and right
 * if the next number is smaller than the left
 * move the right
 * Move until we have a right bigger than the left or right = length
 * When we move, keep adding the number together
 */
function trap(height: number[]): number {
    var running_total_trap_water = 0; 
    // Check start and finish
    var start_index = 0;
    var end_index = height.length - 1;
    var absolute_max = height.length - 1;
    var left_pointer = 0;
    var right_pointer = 0;
    while(height[start_index + 1] >= height[start_index] && start_index <=  absolute_max){
        start_index = start_index + 1;
    }

    while(height[end_index] <= height[end_index-1] && end_index >= 0){
        end_index = end_index - 1;
    }
    if(end_index == left_pointer){
        return 0;
    }
    // Here we have good start index and and end index
    left_pointer = start_index;
    right_pointer = start_index + 1;
    
    while(right_pointer < end_index){
        var found_bigger_or_equal = true;
        while(height[left_pointer] > height[right_pointer]){
            if(right_pointer < end_index){
                right_pointer = right_pointer + 1;
            }
            else{
                found_bigger_or_equal = false;
                break;
            }
        }
        
        if(found_bigger_or_equal){
            for(var i = left_pointer + 1; i < right_pointer; i++){
                running_total_trap_water = running_total_trap_water + Math.min(height[left_pointer], height[right_pointer]) - height[i];
            }

            left_pointer = right_pointer;
            right_pointer = right_pointer + 1;
        }
        else{
            // if not found, advance forward
            left_pointer = left_pointer + 1;
            right_pointer = left_pointer + 1;
        }
    }
    return running_total_trap_water;
};

//console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

console.log(trap([4,2,3]));