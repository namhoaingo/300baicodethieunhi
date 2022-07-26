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
 * 2. Lần 2, tính toán tất cả các suffix ---> Theo chiều phải sang trái, 
 * 
 * Đúng là không thể hiểu nổi. Hay thật !!!!!!!!!!
 */

/**
 * Time Complexity
 * Loop qua cái array hai lần => O(2n) => O(n)
 */

/**
 * Space Complexity
 * 
 */
function productExceptSelf(nums: number[]): number[] {
    
};