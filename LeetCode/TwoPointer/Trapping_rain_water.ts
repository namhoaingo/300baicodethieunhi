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
    var left_pointer = 0;
    var right_pointer = left_pointer + 1;
    var running_total_trap_water = 0;
    if(height[left_pointer] == 0){
        left_pointer = 1;
        right_pointer = left_pointer + 1;
    }
    while(right_pointer <= height.length - 1){
        // Increase until height left = height right
        
        while(height[left_pointer] > height[right_pointer]){                        
           if(right_pointer < height.length -1){
            right_pointer = right_pointer + 1;            
           }
           else{
            break;
           }
        }

        
        if(right_pointer < height.length - 1){
            // Add all the water in between
            for(var index_counter = left_pointer + 1; index_counter < right_pointer; index_counter++){
                running_total_trap_water = running_total_trap_water + height[left_pointer] - height[index_counter];
            }
            // reset left = right
            left_pointer = right_pointer;
            right_pointer = left_pointer + 1;
        }else{
            left_pointer = left_pointer + 1;
            right_pointer = left_pointer + 1;
        }
    }

    return running_total_trap_water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));