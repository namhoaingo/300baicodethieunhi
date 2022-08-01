function maxArea(height: number[]): number {
    var left_pointer = 0;
    var right_pointer = height.length - 1;

    var maxArea = 0;
    var maxIndex = new Array();
    while(left_pointer < right_pointer){
        var current_area = Math.min(height[left_pointer], height[right_pointer]) * (right_pointer - left_pointer);
        if(current_area > maxArea){
            maxArea = current_area;
            maxIndex = [left_pointer, right_pointer];
        }

        if(height[left_pointer] > height[right_pointer]){
            right_pointer = right_pointer - 1;
        }
        else{
            left_pointer = left_pointer + 1
        }
    }

    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));