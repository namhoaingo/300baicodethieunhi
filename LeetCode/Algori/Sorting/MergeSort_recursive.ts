function merge_sort_recursive(numbers: number[]): number[]{
    if (numbers.length == 1){
        return numbers;
    }


    var array_a = numbers.slice(0, numbers.length/2);
    var array_b = numbers.slice(numbers.length/2, numbers.length);

    array_a = merge_sort_recursive(array_a);
    array_b = merge_sort_recursive(array_b);

    return merge(array_a, array_b);
}

function merge(array_a: number[], array_b: number[]): number[]{
    var c = new Array();
    var current_index_a = 0;
    var current_index_b = 0; 
    while (current_index_a <= array_a.length - 1 
        && current_index_b <= array_b.length - 1){
            if(array_a[current_index_a] <= array_b[current_index_b]){
                c.push(array_a[current_index_a]);
                current_index_a = current_index_a + 1;
            } else{
                c.push(array_b[current_index_b]);
                current_index_b = current_index_b + 1;
            }            
        }
    
    // Array b still has number
    if(current_index_a > array_a.length-1 
        && current_index_b <= array_b.length - 1){
            while (current_index_b <= array_b.length - 1){
                c.push(array_b[current_index_b]);
                current_index_b = current_index_b + 1;
            }
        }
    
    // Array a still has number
    if(current_index_a <= array_a.length - 1
        && current_index_b > array_b.length - 1){
            while (current_index_a <= array_a.length - 1) {
                c.push(array_a[current_index_a]);
                current_index_a = current_index_a + 1;
            }
        }

    return c;
}

console.log(merge_sort_recursive([100,4,200,1,3,2]))