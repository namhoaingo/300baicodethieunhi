
// Bruce force
function largestRectangleArea(heights: number[]): number {

    var minheight = Number.MAX_VALUE;
    var maxRec = 0;
    for(var i = 0; i < heights.length; i++){
        for(var j = i; j < heights.length; j++){
            var currentRec = 0;
            minheight = Math.min(heights[i], heights[j], minheight);
            if(j == i){
                currentRec = heights[i];
            }else{
                currentRec = minheight * (j - i + 1);
            }
            maxRec = Math.max(currentRec, maxRec);
        }
        minheight = Number.MAX_VALUE;
    }

    return maxRec;
};

console.log(largestRectangleArea([2,1,5,6,2,3]))