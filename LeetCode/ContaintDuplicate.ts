//https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
    var array_convert = {};
    for (let number of nums){
        if(array_convert[number] == 1){
            return true;
        }
        else{
            array_convert[number] = 1;
        }

    }
    return false;
};

console.time('myTask');
console.timeLog("myTask");
console.log(containsDuplicate([1,2,3,1]));
console.timeEnd("myTask");

// Using array implemetation
// Run time complexity is o(n) -- 133 ms
// Run time space complexity is very hard, depends on the largest number in the array -- 52 MB


// Using dictionary implementation



