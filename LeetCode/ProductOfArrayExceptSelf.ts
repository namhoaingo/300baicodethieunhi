//https://leetcode.com/problems/product-of-array-except-self/

/**
 * Cố gắng hiểu vấn đề 
 * Mày gặp phải vấn đề khi hiểu về prefix và suffix. Khi đọc về gợi ý, mày
 * thực sự không hiểu cái prefix cả suffix là gì, mày lại hiểu nó thánh
 * cái search text prefix và suffix
 * 
 * Cách giải
 * Loop quá cái array 2 lần
 * 1. Lần 1, tính toán tất cả các prefix ---> Theo chiều trái sang phải, thì mày sẽ có kết quả đến số đó
 * 2. Lần 2, tính toán tất cả các suffix ---> Theo chiều phải sang trái
 *      a. Tạo một variable để giữ suffix value <====== Cực kỳ quan trọng 
 * 
 * Đúng là không thể hiểu nổi. Hay thật !!!!!!!!!!
 */

/**
 * Time Complexity
 * Loop qua cái array hai lần => O(2n) => O(n)
 */

/**
 * Space Complexity
 * Loop qua hai lần, và không tạo thêm array nào. O(n)
 */

/**
 * Kết Luận Kinh Khủng
 */
function productExceptSelf(nums: number[]): number[] {
    var resultArray = new Array(nums.length)
    var prefix_current = 1;
    
    
    // Prefix loop
    for (let prefixIndex = 0; prefixIndex < nums.length; prefixIndex++) {
        if(prefixIndex == 0){
            resultArray[0] = prefix_current;
        }
        else if(prefixIndex == 1){
            resultArray[1]=  prefix_current * nums[prefixIndex-1];
        }
        else{
            resultArray[prefixIndex] =  prefix_current * nums[prefixIndex-1];
            prefix_current = prefix_current * nums[prefixIndex-1];
        }
    }

    // Suffix loop
    var suffix_current = 1;
    for (let suffixIndex = nums.length - 1; suffixIndex >= 0; suffixIndex--) {
        if(suffixIndex == 0){
            resultArray[0] = suffix_current;
        }
        else{
            resultArray[suffixIndex] = resultArray[suffixIndex] * suffix_current;
            suffix_current = nums[suffixIndex] * suffix_current;
        }
    }

    return resultArray;
};

console.time();
console.log(productExceptSelf([-1,1,0,-3,3]));
console.timeEnd();