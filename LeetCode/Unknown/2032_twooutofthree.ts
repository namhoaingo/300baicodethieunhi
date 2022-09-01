//https://leetcode.com/problems/two-out-of-three/


function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    let resultDict = new Object();
    let uniqueDict = new Object();

    nums1.forEach(element => {        
        if(!uniqueDict[element]){
            uniqueDict[element] = 1;
            resultDict[element] = 1;            
        }
    })

    uniqueDict = new Object();
    nums2.forEach(element => {
        if(!uniqueDict[element]){
            uniqueDict[element] = 1;
            if(!resultDict[element]){
                resultDict[element] = 1;
            }
            else{
                resultDict[element]++;
            }
        }
    })

 
    uniqueDict = new Object();
    nums3.forEach(element => {
        if(!uniqueDict[element]){
            uniqueDict[element] = 1;
            if(!resultDict[element]){
                resultDict[element] = 1;
            }
            else{
                resultDict[element]++;
            }
        }
    })  
    
    let resultArray = new Array<number>();
    Object.keys(resultDict).forEach(key => {
        if(resultDict[key] >= 2){
            resultArray.push(parseInt(key)
        }
    })
    return resultArray;
};


let resultTwoOutOfThree = twoOutOfThree([3,1], [2,3],[1,2]);
console.log(resultTwoOutOfThree);

// dictionary 
// {number, array it is in}