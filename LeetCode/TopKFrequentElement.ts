
//https://leetcode.com/problems/top-k-frequent-elements/
function topKFrequent(nums: number[], k: number): number[] {
    var indexTrackerDict = {};
    var arrayCounter = new Array();

    for (var i = 0; i < nums.length; i++){
        var currentNum = nums[i];
        // get the current index from indextracker
        var currentIndex = indexTrackerDict[currentNum];
        if(!currentIndex){
            // we dont have this index before
            // insert into index tracker, set the index of array counter to 1
            indexTrackerDict[currentIndex] = 1;
            
            // adjust array counter
            var currentArrayAtOneIndex = arrayCounter[1];
            if(currentArrayAtOneIndex){
                currentArrayAtOneIndex.push(currentNum);
            }else{
                currentArrayAtOneIndex = new Array(currentNum);
            }
        }
        else{
            // adjust the array counter, move it up once
            var currentArrayPositionInArrayCounter = arrayCounter[currentIndex];
            var nextPositionArrayInCounter = arrayCounter[currentIndex + 1];
            if(nextPositionArrayInCounter){
                nextPositionArrayInCounter.push(currentNum);
            }else{
                nextPositionArrayInCounter = new Array(currentNum)
            }

            // remove position from currentArrayPosition
            currentArrayAtOneIndex.remove(currentNum);

            // update dict
            indexTrackerDict[currentNum] = currentIndex + 1;
        }    
    }

    var result = new Array();
    for(var lastIndex = arrayCounter.length - 1; lastIndex >= 0; lastIndex--){
        var lastElementArray = arrayCounter[lastIndex];
        if(result.length != k){
            var pickIndex = k-result.length;
            result.push(arrayCounter.);
        }
    }
}