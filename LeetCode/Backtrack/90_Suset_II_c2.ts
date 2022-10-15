//https://leetcode.com/problems/subsets-ii/
function subsetsWithDup_c2(nums: number[]): number[][] {
    let track = [];
    let result = [];
    nums.sort();
    function backtrack(index: number) {
        // check prev result
        if (index == nums.length) {
            result.push([...track]);
            return;
        }

        track.push(nums[index]);
        backtrack(index + 1);
        track.pop()

        // Dont want to include that number
        // forward until the number is different
        let currentNum = nums[index];

        //TODO: This is very hard. Advance ONLY ON DIFFERENT NUMBER
        while(currentNum == nums[index+1] && index < nums.length -1){
            index = index + 1;            
        }
        backtrack(index + 1);
    }

    backtrack(0);
    return result;
};

console.log(subsetsWithDup_c2([4, 4, 4, 1, 4]));