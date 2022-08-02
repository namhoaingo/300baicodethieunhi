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

    var left = 0;
    var right = height.length - 1;

    var max_left = 0;
    var max_right = 0;

    var running_water = 0;

    while (left <= right) {
        if(max_left <= max_right){
            // calculate 
            running_water = running_water + ((Math.min(max_left, max_right) - height[left]) <= 0 ? 0: (Math.min(max_left, max_right) - height[left]));
            // check if we need to update max_left
            if(max_left < height[left]){
                max_left = height[left];
            }
            // advance the left
            left = left + 1;            
        }else{
            running_water = running_water + ((Math.min(max_left, max_right) - height[right]) <= 0 ? 0 : (Math.min(max_left, max_right) - height[right]));
            if(max_right < height[right]){
                max_right = height[right];
            }

            // decrease right
            right = right - 1;
        }

    }
    return running_water;
}

//console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
//console.log(trap([4, 2, 3]));