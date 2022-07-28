/**
 * Heap sort
 * Loop
 * 
 */

function heapSortLoop(inputs: number[]): number[]{
    return new Array();   
}

function create_heap(inputs: number[]): number[]{
    // Init the heap
    // start from the end and bump up the MAX value    
    for(var index = inputs.length-1; index > 0; index--){
        // run until 1, skip 0
        // because 0 does not have parrent
        var parent = Math.floor(index/2);
        if(inputs[parent] < inputs[index]){
            var temp = inputs[index];
            inputs[index] = inputs[parent];
            inputs[parent] = temp;
        }        
    }
    return inputs;
}

function maintain_heap(inputs:number[]): number[]{
    // Maintain the heap
    // Start from the top, and perform swap
    return new Array();
}



// Test create_heap function
console.log(create_heap([2,1,8,9,10,0]))