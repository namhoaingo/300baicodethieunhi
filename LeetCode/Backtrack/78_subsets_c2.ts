//https://leetcode.com/problems/subsets/
function subsets_c2(nums: number[]): number[][] {
    let track = [];
    let answer = [];
    function backtrack(index: number){
        if(index == nums.length){
            answer.push([...track]);
            return;
        }

        track.push(nums[index]);
        backtrack(index+1);
        track.pop();

        backtrack(index+1);
    }

    backtrack(0);
    return answer;
}

console.log(subsets_c2([1,2,3]));