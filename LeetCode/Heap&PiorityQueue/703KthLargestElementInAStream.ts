//https://leetcode.com/problems/kth-largest-element-in-a-stream/

class KthLargest {
    sortedArrayWithHeap: Array<number>;
    requestedK: number;
    constructor(k: number, nums: number[]) {
        this.requestedK = k;
        this.sortedArrayWithHeap = nums;
        this.sortArrayUsingHeap();
        while(this.sortedArrayWithHeap.length > this.requestedK){
            // pop the min 
            this.sortedArrayWithHeap.pop();
        }
    }

    //add(val: number): number {
    //    this.sortedArrayWithHeap.push(val);
    //    this.sortArrayUsingHeap();
    //    while(this.sortedArrayWithHeap.length > this.requestedK){
    //        this.sortedArrayWithHeap.pop();
    //    }
    //    return this.sortedArrayWithHeap[this.requestedK-1];
    //}

    add(val: number): number{
        // insert to the middle
        if()
    }
    private add_recursive(val: number, startIndex: number, endIndex: number){
        if(startIndex == endIndex){
            let leftArray = this.sortedArrayWithHeap.sl
        }
        let mid_index = (startIndex + endIndex) /2 ;
        if(val > this.sortedArrayWithHeap[mid_index]){
            this.add_recursive(val, mid_index + 1, endIndex);
        }
        else{
            this.add_recursive(val, startIndex, mid_index);
        }
    }
    private sortArrayUsingHeap(){
        // want to get number 8,5,4,2 => 8,5,4. Return 4
        
        for(let index = this.sortedArrayWithHeap.length - 1; index >= 0; index--){
            this.minHeapity(this.sortedArrayWithHeap, index, this.sortedArrayWithHeap.length-1);
        }
        for(let index = 0 ; index < this.sortedArrayWithHeap.length - 1; index++ ){
            //swap
            this.swapA_B(this.sortedArrayWithHeap, 0, this.sortedArrayWithHeap.length- index -1);
            this.minHeapity(this.sortedArrayWithHeap, 0, this.sortedArrayWithHeap.length - index 
                - 2 )
        }
    }

    private minHeapity(inputs: Array<number>, currentIndex: number, endIndex: number)
    {
        while(true){
            let leftChildIndex = currentIndex * 2 + 1;
            let rightChildIndex = currentIndex * 2 + 2;

            if(leftChildIndex <= endIndex && rightChildIndex <= endIndex){                
                if(inputs[currentIndex] > Math.min(inputs[leftChildIndex], inputs[rightChildIndex])){
                    if(inputs[leftChildIndex] < inputs[rightChildIndex]){
                        this.swapA_B(inputs, currentIndex, leftChildIndex);
                        currentIndex = leftChildIndex
                    }else{
                        this.swapA_B(inputs, currentIndex, rightChildIndex);
                        currentIndex = rightChildIndex
                    }     
                } 
                else{
                    break;
                }              
            }
            else if(leftChildIndex <= endIndex){
                if(inputs[currentIndex] > inputs[leftChildIndex]){
                    this.swapA_B(inputs, currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex
                }
                else{
                    break
                }

            }
            else if (rightChildIndex <= endIndex){
                if(inputs[currentIndex] > inputs[rightChildIndex]){
                    this.swapA_B(inputs, currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex
                }
                else{
                    break;
                }
            }     
            else{
                break;
            }  
        }
    }

    private swapA_B(inputs: Array<number>, indexA: number, indexB: number){
        let temp = inputs[indexA];
        inputs[indexA] = inputs[indexB];
        inputs[indexB] = temp;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


var obj =new KthLargest(3, [4,5,8,2]);
let resultFrom703 = obj.add(3); //2,3,4,5,8
console.log(resultFrom703); //2
resultFrom703 = obj.add(5); // 2,3,4,5,5,8
console.log(resultFrom703);
resultFrom703 = obj.add(10);
console.log(resultFrom703);
resultFrom703 = obj.add(9);
console.log(resultFrom703);
resultFrom703 = obj.add(4);
console.log(resultFrom703);