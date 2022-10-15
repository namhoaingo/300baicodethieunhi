//https://leetcode.com/problems/subsets-ii/
function subsetsWithDup(nums: number[]): number[][] {
    let track = [];
    let result = [];
    let diction = {};
    nums.sort();
    function backtrack(index: number){
        // check prev result
        if(index == nums.length){
            let join = track.join("");
            if (diction[join] == undefined){
                diction[join] = 1;
                result.push([...track]);
            }
            return;
        }

            track.push(nums[index]);
            backtrack(index+1);
            track.pop()

            backtrack(index+1);
    }

    backtrack(0);
    return result;
};

console.log(subsetsWithDup([4,4,4,1,4]));