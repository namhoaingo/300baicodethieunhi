function heapSortRecursiveMain(inputs: number[]){
    var current_last_index = inputs.length-1;
    for(var j = 0; j< inputs.length; j++){
        for(var i = current_last_index; i >= 0; i--){
            // correct
            heapSortRecursive(inputs, i, current_last_index);    
            // Neu doi current_last_index thanh inputs.length
            // thi duoc array tu to den nho 
        }
        swap_for_heapsort_recursive(inputs, 0, current_last_index);
        current_last_index = current_last_index-1;    
    }
}

function heapSortRecursive(inputs: number[], currentIndex: number, lastIndex: number){
    var leftIndex = currentIndex * 2 + 1;
    var rightIndex = currentIndex * 2 + 2;

    // Check the range
    if(Math.max(leftIndex, rightIndex) <= lastIndex){
        if( inputs[currentIndex] < Math.max(inputs[leftIndex], inputs[rightIndex])){
            if(inputs[rightIndex] > inputs[leftIndex]){
                swap_for_heapsort_recursive(inputs, currentIndex, rightIndex);
                heapSortRecursive(inputs, rightIndex, lastIndex);
            }
            else if(inputs[currentIndex] < inputs[leftIndex]){
                swap_for_heapsort_recursive(inputs, currentIndex, leftIndex);
                heapSortRecursive(inputs, leftIndex, lastIndex)
            }             
        } 
    }else if(leftIndex <= lastIndex && inputs[currentIndex] < inputs[leftIndex]){
        swap_for_heapsort_recursive(inputs, currentIndex, leftIndex);
        heapSortRecursive(inputs, leftIndex, lastIndex);
    } else if(rightIndex <= lastIndex && inputs[currentIndex] < inputs[rightIndex]){
        swap_for_heapsort_recursive(inputs, currentIndex, rightIndex);
        heapSortRecursive(inputs, rightIndex, lastIndex);
    }
}

function swap_for_heapsort_recursive(inputs: number[], first_index: number, second_index: number){
    var temp = inputs[first_index];
    inputs[first_index] = inputs[second_index];
    inputs[second_index] = temp;
}

var inputs = [2,1,8,9,10,0];
heapSortRecursiveMain(inputs);
console.log(inputs);