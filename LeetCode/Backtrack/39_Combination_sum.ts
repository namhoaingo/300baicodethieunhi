//https://leetcode.com/problems/combination-sum/
function combinationSum(candidates: number[], target: number): number[][] {
    let result = [];
    let track = [];

    function backTrack(index: number, prevTotal: number){
        if(prevTotal == target){
            result.push([...track]);
            return;
        }

        if(prevTotal > target || index > candidates.length - 1){
            return;
        }

        track.push(candidates[index]);
        backTrack(index, prevTotal+candidates[index]);
        track.pop();

        backTrack(index+1, prevTotal);

    }

    backTrack(0, 0);
    return result;
};

console.log(combinationSum([2,3,6,7], 7))