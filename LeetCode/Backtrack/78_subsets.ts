//https://leetcode.com/problems/subsets/
function subsets(nums: number[]): number[][] {
    let answer = [];

    function backtrack(prev: number[], nums: number[]){
        // clone new nums
        let newNums = nums;
        
        nums.forEach((num) => {
            prev.push(num);            
            answer.push([...prev]);
            newNums = newNums.slice(1);
            backtrack([...prev], newNums);
            prev.pop();
        })
    }

    backtrack([], nums);
    answer.push([]);
    return answer;
}

console.log(subsets([1,2,3]));