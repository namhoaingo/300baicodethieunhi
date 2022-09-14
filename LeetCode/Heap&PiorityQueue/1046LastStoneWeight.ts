//https://leetcode.com/problems/last-stone-weight/

// create a max heap
function lastStoneWeight(stones: number[]): number {
    let maxHeap = new maxHeapClass(stones);
    while(true){
        if(maxHeap.size() == 0){
            return 0;
        }

        if(maxHeap.size() == 1){
            return maxHeap.pop();
        }

        let firstBiggest = maxHeap.pop();
        let secondBiggest = maxHeap.pop();
        if(firstBiggest != secondBiggest){
            let remaining = Math.abs(firstBiggest-secondBiggest);
            maxHeap.add(remaining);
        }
    }
};

class maxHeapClass{

    heapArray: Array<number>;

    constructor(inputs: Array<number>){
        this.heapArray = inputs;
        this.prepareHeap();
    }

    size(): number{
        return this.heapArray.length;
    }
    
    private prepareHeap(){
        for(let index = this.heapArray.length-1; index >=0 ; index--){
            this.maxHeapify(index, this.heapArray.length-1);
        }
    }

    private maxHeapify(currentIndex: number, endIndex: number){
        while(true){
            let leftChildIndex = currentIndex * 2 + 1;
            let rightChildIndex = currentIndex * 2 + 2;
            if(leftChildIndex <= endIndex && rightChildIndex <= endIndex){
                if(this.heapArray[currentIndex] < Math.max(this.heapArray[leftChildIndex], this.heapArray[rightChildIndex])){
                    if(this.heapArray[leftChildIndex] > this.heapArray[rightChildIndex]){
                        this.swapA_B(this.heapArray, currentIndex, leftChildIndex);
                        //this.maxHeapify(leftChildIndex, endIndex);
                        currentIndex = leftChildIndex;
                    }
                    else{
                        this.swapA_B(this.heapArray, currentIndex, rightChildIndex);
                        //this.maxHeapify(rightChildIndex, endIndex);
                        currentIndex = rightChildIndex;
                    }
                }
                else{
                    break;
                }
            }
            else if(leftChildIndex <= endIndex && rightChildIndex > endIndex){
                if(this.heapArray[currentIndex] < this.heapArray[leftChildIndex]){
                    this.swapA_B(this.heapArray, currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                }
                else{
                    break;
                }
            }
            else if(rightChildIndex <= endIndex && leftChildIndex > endIndex){
                if(this.heapArray[currentIndex] < this.heapArray[rightChildIndex]){
                    this.swapA_B(this.heapArray, currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex;
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

    private swapA_B(unsortedArray: Array<number>, indexA: number, indexB: number){
        let temp = unsortedArray[indexA];
        unsortedArray[indexA] = unsortedArray[indexB];
        unsortedArray[indexB] = temp;
    }

    add(val: number){
        this.heapArray.push(val);
        this.maxHeapify_addition(this.heapArray.length-1);
    }


    private maxHeapify_addition(currentIndex: number){
        while(true){
            let parrentIndex = Math.floor(currentIndex/2);
            if(parrentIndex != currentIndex){
                if(this.heapArray[parrentIndex] < this.heapArray[currentIndex]){
                    this.swapA_B(this.heapArray, parrentIndex, currentIndex);
                    currentIndex = parrentIndex;
                }
                else{
                    break;
                }
            }else{
                break;
            }
        }
    }

    pop(): number{
        this.swapA_B(this.heapArray, 0, this.heapArray.length-1);
        let biggestNumber = this.heapArray.pop();
        this.maxHeapify(0, this.heapArray.length-1);
        return biggestNumber;
    }
}


/// testing
let resultLastStoneWeight = lastStoneWeight([2,7,4,1,8,1]);
console.log(resultLastStoneWeight);