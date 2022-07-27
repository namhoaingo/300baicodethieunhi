//https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * Understand the problem
 * We will need to sort the array some how. 
 * The requirement does not specify space complexity, so we can use a big list to take care of this
 * Nhưng vấn đề là --- con số đó có thể là số âm
 *  -- Giải quyết số âm - số âm là 1 dãy
 * -- Giải quyết số dương - số dương là 1 dãy
 * có 3 trường hợp
 * - Kiểm tra số dương
 * - Kiêm tra số âm
 * - kiểm tra nơi giao nhau giữa hai dãy
 * 
 * Time Complexity
 * Loop qua array một vòng O(n);
 * Loop qua array kết quả một vòng nữa - Vấn đề: Nếu con số quá lớn, thì nó sẽ 
 * gấp nhiều lần n
 * 
 * Chẳng lẽ lại phải dùng sort à
 * -- Nhưng cái khác là consecutive, không biết nó có cho mình cái hint gì ko đây
 * 
 * 
 * 
 * *********************************************************************************
 * Cách khác
 * https://leetcode.com/problems/longest-consecutive-sequence/discuss/41057/Simple-O(n)-with-Explanation-Just-walk-each-streak
 * Cách này khác khá hay, có liên quan đến sử dụng dictionary 
 * 1. Loop qua tất cả các giá trị trong array
 *  1.1 - Đưa vào trong dictionary
 * 
 * 2. Loop qua tất cả các giá trị trong array lần nữa
 *  2.1 - công lên dần và kiểm trả xem trong dict có không
 *  2.2 - Length là bằng điểm dừng trừ đi số hiện tại
 * 
 * Time Complexity 
 * Loop qua array lần 1 - O(n) - Tạo dict
 * Loop qua array lần 2 - O(n)
 *      Trong khi loop thì kiểm tra xem có trong dict ko O(1)
 * 
 * Kết quả O(n)
 * 
 * Space Complexity 
 * Sữ dựng Dict có size bằng n O(n)
 */     


function longestConsecutive(nums: number[]): number {
    var dict = {};
    var max_consecutive_length = 0;
    for (var i = 0; i < nums.length; i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = 1;
        }
    }

    for (var j = 0; j < nums.length; j++){
        var starting_num = nums[j];
        while (dict[starting_num]){
            starting_num = starting_num + 1;
        }

        var current_count = starting_num - nums[j] + 1;
        if(current_count >max_consecutive_length){
            max_consecutive_length = current_count;
        }
    }

    return max_consecutive_length;
};

console.log(longestConsecutive([100,4,200,1,3,2]));