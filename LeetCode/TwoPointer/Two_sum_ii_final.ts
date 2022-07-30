//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
function twoSum(numbers: number[], target: number): number[] {
    
    var start_index = 0; 
    var end_index = numbers.length - 1;
    var result = new Array();
    while(start_index < end_index){
        if(numbers[start_index] + numbers[end_index] > target){
            // Khi tổng 2 số lớn hơn tổng, 
            // mày nên giảm index cuối đi, 
            // vì giờ đã là to nhất rổi, chỉ còn cách giảm số cuối đi mới làm giảm 
            // được tổng của hai số thôi
            // Nếu mà tăng số start_index lên, thì con số 
            // tổng của hai số lại càng lớn
            // sẽ không giải quyết được gì
            end_index = end_index - 1; 
        }
        else if (numbers[start_index] + numbers[end_index] < target){
            // Khi tổng hai số nhỏ hơn target, 
            // chúng ta cần tìm cách tăng tổng hai số lên bằng cách 
            // tằng start_index
            // Nếu giảm end_index đi thì sẽ tiếp tục làm giảm giá trị
            start_index = start_index + 1;
        }
        else{
            result = [start_index + 1, end_index + 1];
            break;
        }
    }

    return result;
};

// var inputs = [1,2,3,4,4,9,56,90];
// console.log(twoSum(inputs, 8));
