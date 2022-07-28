/**
 * Heap sort
 * Loop
 * 
 */


function heapSortLoop(inputs: number[]){
   var length = inputs.length;
    for(var i = length - 1; i >=0; i--){
        create_maintain_heap(inputs, i, length-1);
    }
    var current_index = length-1;
    for (var index = 0; index < length; index++){
        swap_for_heapsort_loop(inputs, 0, current_index);
        create_maintain_heap(inputs, 0, current_index - 1);
        current_index = current_index - 1;
    }
}

function create_maintain_heap(inputs: number[], current_index: number, upper_index: number){    
    while (true){
        var left_index = current_index * 2 + 1;
        var right_index = current_index * 2 + 2;
        // You want to swap the parent with the BIGGER between left and right
        // Check if the length is valid first
        if(Math.max(left_index, right_index) <= upper_index){
            // check if the current is already biggest
            if(inputs[current_index] >= Math.max(inputs[left_index], inputs[right_index])){
                break;
            }
            // We want to swap to the MAX between left and right
            // because the Max between left and right is the MAX betwene 3 item
            // we can know exactly if we should go left and right after that
            // If we dont get the Max, we will have to pick left or right to SWAP
            else if(inputs[left_index] > inputs[right_index]) {
                // SWAP with left
                swap_for_heapsort_loop(inputs, current_index, left_index);
                // set the current to the left ----> IMPORTANT
                // SO next time we can start checking the left tree
                current_index = left_index;
            } else{
                swap_for_heapsort_loop(inputs, current_index, right_index);
                current_index = right_index;
            }
        }
        // Kiem tra neu left o ngoai range 
        // Truong hop nay xay ra khi current khong co node ben trai
        else if(left_index > upper_index) break;
        else if (inputs[current_index] < inputs[left_index]) {
            swap_for_heapsort_loop(inputs, current_index, left_index);
            current_index = left_index;
        }
        else if(right_index > upper_index) break;
        else if (inputs[current_index] < inputs[right_index]){
            swap_for_heapsort_loop(inputs, current_index, right_index);
            current_index = right_index;
        }
    }
}

function swap_for_heapsort_loop(inputs: number[], a_index: number, b_index: number){
    var temp = inputs[a_index];
    inputs[a_index] = inputs[b_index];
    inputs[b_index] = temp;
}

export {heapSortLoop as default};

// Test create_heap function
// var inputs = [100,4,200,1,3,2];
// heapSortLoop(inputs);
// console.log(inputs);
//console.log(heapSortLoop(inputs));