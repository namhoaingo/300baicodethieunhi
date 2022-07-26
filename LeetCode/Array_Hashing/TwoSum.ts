//https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    var dict = {};
    var dict_result = {};
    for (var i = 0; i < nums.length ; i++){
        var num = nums[i];
        if(dict[target - num] != undefined){
            return [dict_result[target - num], i]
        }
        else{
            dict[num] = target - num;
            dict_result[num] = i;
        }
    }
    return [0,0];
};

//console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
//console.log(twoSum([0,4,3,0], 0))


// ******************** Result ***************//
// Runtime: 94 ms, faster than 82.31% of TypeScript online submissions for Two Sum.
// Memory Usage: 45.3 MB, less than 39.57% of TypeScript online submissions for Two Sum.
