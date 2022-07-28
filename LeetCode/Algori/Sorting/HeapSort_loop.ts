/**
 * Heap sort
 * Loop
 * 
 */

function heapSortLoop(inputs: number[]){
   var length = inputs.length;
    for(var i = length - 1; i >=0; i--){
        create_maintain_heap(inputs, i, length);
    }

    for (var index = 0; index < length; index++){
        var current_length = length;
        swap(inputs, 0, current_length-1);
        create_maintain_heap(inputs, 0, current_length-1);
        current_length = current_length-1;
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
                swap(inputs, current_index, left_index);
                // set the current to the left ----> IMPORTANT
                // SO next time we can start checking the left tree
                current_index = left_index;
            } else{
                swap(inputs, current_index, right_index);
                current_index = right_index;
            }
        }

        // Kiem tra neu left o ngoai range 
        // Truong hop nay xay ra khi current khong co node ben trai
        if(left_index > upper_index) break;
        else if (inputs[current_index] < inputs[left_index]) {
            swap(inputs, current_index, left_index);
            current_index = left_index;
        }

        if(right_index > upper_index) break;
        else if (inputs[current_index] < inputs[right_index]){
            swap(inputs, current_index, right_index);
            current_index = right_index;
        }
    }
}

function swap(inputs: number[], a_index: number, b_index: number){
    var temp = inputs[a_index];
    inputs[a_index] = inputs[b_index];
    inputs[b_index] = temp;
}




// Test create_heap function
var inputs = [2,1,8,9,10,0];
heapSortLoop(inputs);
console.log(inputs);
//console.log(heapSortLoop(inputs));