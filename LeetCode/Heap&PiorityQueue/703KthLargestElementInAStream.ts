//https://leetcode.com/problems/kth-largest-element-in-a-stream/
//Problem:
/*
    Get the K max number within a stream. A steam is an array which can grow
    K Max Number
    -> create the min heap with size of K. Which is the biggest K number.
        -> We dont need to maintain the sorted order for this array, just need to know what the
           min number is. The min number is always the Kth biggest number
    -> Every add operation, add it into the min heap.
        Insert into the end of the array
        Check parrent to make sure
*/


class KthLargest {
    sortedArrayUsingHeap: Array<number>
    _k: number

    constructor(k: number, nums: number[]) {
        let unsortedArray = nums;
        this._k = k;
        this.sortedArrayUsingHeap = this.processQueue(unsortedArray, _k);
    }


    add(val: number): number{
        // check the value, if the value is bigger than the min
        // 
    }

    private processQueue(unSortedArray: Array<number>, k: number): Array<number>{
        // take in unsorted array
        // return the array which has the length no bigger than k
        for(let index = 0; index < unSortedArray.length; index--){
            this.min_heapifyAtIndex(unSortedArray, index, unSortedArray.length-1);
        }

        while(unSortedArray.length > k){
            unSortedArray.shift();
            this.swapA_B(unSortedArray, 0, unSortedArray[unSortedArray.length-1]);
            this.min_heapifyAtIndex(unSortedArray, 0, unSortedArray.length-1);
        }
    }

    private min_heapifyAtIndex(unSortedArray: Array<number>, currentIndex: number, endIndex: number){
        while(true){
            let leftChildIndex = currentIndex * 2 + 1; 
            let rightChildIndex = currentIndex * 2 + 2;
            
            if(leftChildIndex <= endIndex && rightChildIndex <= endIndex){
                if(unSortedArray[currentIndex] > Math.min(unSortedArray[leftChildIndex], unSortedArray[rightChildIndex])){
                    if(unSortedArray[leftChildIndex] < unSortedArray[rightChildIndex]){
                       this.swapA_B(unSortedArray, currentIndex, leftChildIndex);
                       this.min_heapifyAtIndex(unSortedArray, leftChildIndex, endIndex);
                    }
                    else{
                        this.swapA_B(unSortedArray, currentIndex, rightChildIndex);
                        this.min_heapifyAtIndex(unSortedArray, rightChildIndex, endIndex);
                    }
                }
            }
            else if(leftChildIndex <= endIndex && rightChildIndex > endIndex){
                if(unSortedArray[currentIndex] > unSortedArray[leftChildIndex]){
                    this.swapA_B(unSortedArray, currentIndex, leftChildIndex);
                    this.min_heapifyAtIndex(unSortedArray, leftChildIndex, endIndex);
                }
                else{
                    break;
                }
            }
            else if(rightChildIndex <= endIndex && leftChildIndex > endIndex){
                if(unSortedArray[currentIndex] > unSortedArray[rightChildIndex]){
                    this.swapA_B(unSortedArray, currentIndex, rightChildIndex);
                    this.min_heapifyAtIndex(unSortedArray, rightChildIndex, endIndex);
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

    private swapA_B(unSortedArray: Array<number>, index_a: number, index_b: number){
        let temp = unSortedArray[index_a];
        unSortedArray[index_a] = unSortedArray[index_b];
        unSortedArray[index_b] = temp;
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