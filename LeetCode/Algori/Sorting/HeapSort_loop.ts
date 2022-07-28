/**
 * Heap sort
 * Loop
 * 
 */

function heapSortLoop(inputs: number[]){
   for(var i = inputs.length-1; i >=0; i--){
    create_maintain_heap(inputs, i, inputs.length);
   }
}

function create_maintain_heap(inputs: number[], current_index: number, upper_index: number){    
    while (true){
        var left_index = current_index * 2 + 1;
        var right_index = current_index * 2 + 2;
        if(left_index <= upper_index && inputs[current_index] < inputs[left_index] ){
            swap(inputs, current_index, left_index);
            // Buoc nay cuc ky quan trong
            current_index = left_index;
        } else{
            // No child or the current index number is already bigger than the left
            break;
        }

        if(right_index <= upper_index && inputs[current_index] < inputs[right_index]){
            swap(inputs, current_index, right_index);
            // Buoc nay cuc ky quan trong
            current_index = right_index;
        }else{
            // No child or the current index number is already bigger than the right
            break;
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