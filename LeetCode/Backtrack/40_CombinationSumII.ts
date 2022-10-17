//https://leetcode.com/problems/combination-sum-ii/
function combinationSum2(candidates: number[], target: number): number[][] {
    let answer = [];
    let track = [];

    candidates.sort();
    function backTrack(index: number, prevTotal: number){
        if(prevTotal == target){
            answer.push([...track]);
            return;
        }

        if(prevTotal > target || index >= candidates.length){
            return;
        }

        // first choice, add the number at index 
        track.push(candidates[index]);
        let newTotal = prevTotal + candidates[index];
        backTrack(index+1, newTotal);
        track.pop();
        // the second choice
        let currentNum = candidates[index];
        while(currentNum == candidates[index+1] && index < candidates.length - 1){
            index = index + 1;
        }
        backTrack(index+1, prevTotal);
    }

    backTrack(0, 0);
    return answer;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));