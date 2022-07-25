/*
Lession learn
1. Calculate the count using dictionary/ hash map is best
2. Sort the array using index is even better
3. One way to do this is using Max Heap
*/

//https://leetcode.com/problems/top-k-frequent-elements/
function topKFrequent(nums: number[], k: number): number[] {
    var numsLeng = nums.length;
    var indexTrackerDict = {};
    // the array will be bounded by k. It will not be bigger. 
    var arrayCounter = new Array(numsLeng);

    for (var i = 0; i < numsLeng; i++) {
        var currentNum = nums[i];
        // get the current index from indextracker
        var currentIndex = indexTrackerDict[currentNum];
        if (!currentIndex) {
            // we dont have this index before
            // insert into index tracker, set the index of array counter to 1
            indexTrackerDict[currentNum] = 1;

            // adjust array counter
            if (arrayCounter[1]) {
                arrayCounter[1].push(currentNum);
            } else {
                arrayCounter[1] = [currentNum];
            }
        }
        else {

            //Start to opimize

            // adjust the array counter, move it up once
            // Problem
            // 1. Moving things around cost too much time
            // 2. Normal suggested way is doing three loop with O(n), O(n), O(k)
            if (arrayCounter[currentIndex + 1]) {
                arrayCounter[currentIndex + 1].push(currentNum);
            } else {
                arrayCounter[currentIndex + 1] = [currentNum]
            }

            // remove position from currentArrayPosition
            arrayCounter[currentIndex] = arrayCounter[currentIndex].filter(
                item => item !== currentNum);

            // update dict
            indexTrackerDict[currentNum] = currentIndex + 1;

            ///End opimize
        }
    }

    var result = new Array();
    var remainingItemPicking = k;
    for (var lastIndex = numsLeng - 1; lastIndex >= 0 && remainingItemPicking != 0; lastIndex--) {
        var lastElementArray = arrayCounter[lastIndex];
        if (lastElementArray) {
            if (remainingItemPicking >= lastElementArray.length) {
                result.push(...lastElementArray)
                remainingItemPicking = remainingItemPicking - lastElementArray.length;
            }
            else {
                // only pick the remaining item
                result.push(...lastElementArray.slice(0, remainingItemPicking));
                remainingItemPicking = 0;
            }
        }
    }

    return result;
}

console.time();
console.log(topKFrequent([1,1,1,2,2,3], 2));
console.timeEnd();

// console.time();
// console.log(topKFrequent([1], 1));
// console.timeEnd();

///**********Result**************** */
// Runtime: 234 ms, faster than 5.24% of TypeScript online submissions for Top K Frequent Elements.
// Memory Usage: 49.5 MB, less than 23.90% of TypeScript online submissions for Top K Frequent Elements.