function summaryRanges(nums: number[]): string[] {
    if(nums.length == 0){
        return [];
    }
    
    let result: string[] = [];
    let start: number = nums[0];
    let end: number = nums[0];
    let resultString: string;
    nums.forEach((num: number, index: number) => {
        if(index === 0){
            return;
        }
        end = end + 1;

        if(end !== num){                       
            end = end - 1;
            resultString = start === end ? end + "": start + "->" + end;
            result.push(resultString);
            start = num;
            end = num;
        }
    })

    resultString = start === end ? end + "": start + "->" + end;
    result.push(resultString);
    
    return result;
};

//console.log(summaryRanges([0,2,3,4,6,8,9]));