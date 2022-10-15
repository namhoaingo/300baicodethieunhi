//https://leetcode.com/problems/permutations/
function permute(nums: number[]): number[][] {
    let track = [];
    let result = [];
    let globalLengh = nums.length;
    function backtrack(nums: number[]){
        if(track.length == globalLengh){
            result.push([...track]);
            return;
        }
        if(nums.length == 0){
            return;
        }

        nums.forEach((num, index) => {
            // let newArray
            let newArray = nums.filter((x, ele_index) => {return ele_index != index;})
            track.push(num);
            backtrack(newArray);
            track.pop();
        })
    }

    backtrack(nums);
    return result;
};

console.log(permute([1,2,3]));