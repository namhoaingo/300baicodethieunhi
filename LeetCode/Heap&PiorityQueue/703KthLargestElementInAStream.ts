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
        this.sortedArrayUsingHeap = this.processQueue(unsortedArray, this._k);
    }


    add(val: number): number{
        // check the value, if the value is bigger than the min
        // if it is bigger than the min, insert
        // it it is smaller than the min, ignore it
        if(this.sortedArrayUsingHeap.length < this._k){
            this.sortedArrayUsingHeap.push(val);
            this.heapSortBaseOnParent(this.sortedArrayUsingHeap, this.sortedArrayUsingHeap.length-1);
        }
        else{
            let currentKBiggest = this.sortedArrayUsingHeap[0];
            if(currentKBiggest < val){
                this.sortedArrayUsingHeap.push(val);
                this.heapSortBaseOnParent(this.sortedArrayUsingHeap, this.sortedArrayUsingHeap.length-1);
                while(this.sortedArrayUsingHeap.length > this._k){
                    //this.sortedArrayUsingHeap.shift();
                    this.swapA_B(this.sortedArrayUsingHeap, 0, this.sortedArrayUsingHeap.length-1);
                    this.sortedArrayUsingHeap.pop();
                    this.min_heapifyAtIndex(this.sortedArrayUsingHeap, 0, this.sortedArrayUsingHeap.length-1);
                }
            } 
        }
        return this.sortedArrayUsingHeap[0];
    }

    private heapSortBaseOnParent(unSortedArray: Array<number>, currentIndex: number){
        let parrentIndex = Math.floor((currentIndex-1)/2);
        while(true){
            if(currentIndex !=  parrentIndex){
                if(unSortedArray[currentIndex] < unSortedArray[parrentIndex]){
                    this.swapA_B(unSortedArray, currentIndex,parrentIndex);
                    this.heapSortBaseOnParent(unSortedArray, parrentIndex);
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


    private processQueue(unSortedArray: Array<number>, k: number): Array<number>{
        // take in unsorted array
        // return the array which has the length no bigger than k
        for(let index = unSortedArray.length - 1; index >= 0; index--){
            this.min_heapifyAtIndex(unSortedArray, index, unSortedArray.length-1);
        }

        while(unSortedArray.length > k){
            //unSortedArray.shift();
            this.swapA_B(unSortedArray, 0, unSortedArray.length-1);
            unSortedArray.pop();
            this.min_heapifyAtIndex(unSortedArray, 0, unSortedArray.length-1);
        }

        return unSortedArray;
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
                }else{
                    break;
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

//Runtime: 231 ms, faster than 66.67% of TypeScript online submissions for Kth Largest Element in a Stream.
//Memory Usage: 49.9 MB, less than 90.60% of TypeScript online submissions for Kth Largest Element in a Stream.


/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


//var obj =new KthLargest(3, [4,5,8,2]);
//let resultFrom703 = obj.add(3); //2,3,4,5,8
//console.log(resultFrom703); //2
//resultFrom703 = obj.add(5); // 2,3,4,5,5,8
//console.log(resultFrom703);
//resultFrom703 = obj.add(10);
//console.log(resultFrom703);
//resultFrom703 = obj.add(9);
//console.log(resultFrom703);
//resultFrom703 = obj.add(4);
//console.log(resultFrom703);

var obj =new KthLargest(7, [-10,1,3,1,4,10,3,9,4,5,1]);
let resultFrom703 = obj.add(3); //2,3,4,5,8
console.log(resultFrom703); //2
resultFrom703 = obj.add(2); // 2,3,4,5,5,8
console.log(resultFrom703);
resultFrom703 = obj.add(3);
console.log(resultFrom703);
resultFrom703 = obj.add(1);
console.log(resultFrom703);
resultFrom703 = obj.add(2);
console.log(resultFrom703);
resultFrom703 = obj.add(4);
console.log(resultFrom703);
resultFrom703 = obj.add(5);
console.log(resultFrom703);
resultFrom703 = obj.add(5);
console.log(resultFrom703);
resultFrom703 = obj.add(6);
console.log(resultFrom703);
resultFrom703 = obj.add(7);
console.log(resultFrom703);
resultFrom703 = obj.add(7);
console.log(resultFrom703);
resultFrom703 = obj.add(8);
console.log(resultFrom703);
resultFrom703 = obj.add(2);
console.log(resultFrom703);
resultFrom703 = obj.add(3);
console.log(resultFrom703);
resultFrom703 = obj.add(1);
console.log(resultFrom703);
resultFrom703 = obj.add(1);
console.log(resultFrom703);
resultFrom703 = obj.add(1);
console.log(resultFrom703);
resultFrom703 = obj.add(10);
console.log(resultFrom703);
resultFrom703 = obj.add(11);
console.log(resultFrom703);
resultFrom703 = obj.add(5);
console.log(resultFrom703);
resultFrom703 = obj.add(6);
console.log(resultFrom703);
resultFrom703 = obj.add(2);
console.log(resultFrom703);

resultFrom703 = obj.add(4);
console.log(resultFrom703);
resultFrom703 = obj.add(7);
console.log(resultFrom703);
resultFrom703 = obj.add(8);
console.log(resultFrom703);
resultFrom703 = obj.add(5);
console.log(resultFrom703);
resultFrom703 = obj.add(6);
console.log(resultFrom703);
