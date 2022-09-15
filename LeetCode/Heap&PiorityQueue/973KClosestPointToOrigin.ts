//https://leetcode.com/problems/k-closest-points-to-origin/

function kClosest(points: number[][], k: number): number[][] {
    // Similar to problem 703
    let maxHeap_point_973_container = new maxHeap_point_973(k) ;
    points.forEach(ele =>{
        maxHeap_point_973_container.add(ele);
    })

    return maxHeap_point_973_container.heapArray;
};


// max heap containt the list of k smallest point
// with the biggest point at the top
class maxHeap_point_973{
    heapArray: Array<Array<number>>;
    k: number
    constructor(_k: number){
        this.heapArray = new Array<Array<number>>();        
        this.k = _k;
    }

    size(): number{
        return this.heapArray.length;        
    }

    add(point: Array<number>){
        // Add to the bottom
        // heapify up the parent
        if(this.size() < this.k){
            this.heapArray.push(point);
            this.maxheapifyParent(this.heapArray.length-1, 0)
        }
        else{
            let maxPoint = this.heapArray[0];
            if(this.calDistant(point) < this.calDistant(maxPoint)){
               this.pop()
               this.heapArray.push(point);
               this.maxheapifyParent(this.heapArray.length-1,0);
            }
        }
    }
    
    pop(): Array<number>{
        // swap the top with bottom
        // remove the bottom
        // heapify the child
        this.swapA_B(0, this.heapArray.length-1);
        let maxNumber = this.heapArray.pop();
        this.maxheapifyChild(0, this.heapArray.length -1);
        return maxNumber;
    }

    private swapA_B(indexA: number, indexB: number){
        let temp = this.heapArray[indexA];
        this.heapArray[indexA] = this.heapArray[indexB]
        this.heapArray[indexB] = temp;
    }

    private calDistant(point: Array<number>){
        return Math.pow(point[0],2) + Math.pow(point[1],2);
    }

    private maxheapifyChild(currentIndex: number, endIndex: number){
        while(true){
            let rightChildIndex = currentIndex * 2 + 1;
            let leftChildIndex = currentIndex * 2 + 2;
            if(rightChildIndex <= endIndex && leftChildIndex <= endIndex){
                if(this.calDistant(this.heapArray[currentIndex]) 
                    < Math.max(this.calDistant(this.heapArray[rightChildIndex]), this.calDistant(this.heapArray[leftChildIndex]) 
                    )){
                      if(this.calDistant(this.heapArray[rightChildIndex]) > this.calDistant(this.heapArray[leftChildIndex])){
                        this.swapA_B(currentIndex, rightChildIndex);
                        currentIndex = rightChildIndex;
                      }
                      else{
                        this.swapA_B(currentIndex, leftChildIndex);
                        currentIndex = leftChildIndex;
                      }
                    }
                    else{
                        break;
                    }
            }
            else if(rightChildIndex <= endIndex && leftChildIndex > endIndex){
                if(this.calDistant(this.heapArray[rightChildIndex]) > this.calDistant(this.heapArray[currentIndex])){
                    this.swapA_B(currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex;
                }
                else{
                    break;
                }
            }
            else if(leftChildIndex <= endIndex && rightChildIndex > endIndex){
                if(this.calDistant(this.heapArray[leftChildIndex]) > this.calDistant(this.heapArray[currentIndex])){
                    this.swapA_B(currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                }else{
                    break;
                }
            }
            else{
                break;
            }
        }
    }

    private maxheapifyParent(currentIndex:number, endIndex: number){
        while(true){
            let parentIndex = Math.floor((currentIndex-1)/2);
            if(parentIndex >= endIndex && parentIndex != currentIndex){
               if(this.calDistant(this.heapArray[parentIndex]) < this.calDistant(this.heapArray[currentIndex])) {
                    this.swapA_B(currentIndex, parentIndex);
                    currentIndex = parentIndex
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
}


// Testing 
//let resultFrom973 = kClosest([[3,3],[5,1],[-2,4]], 2);
//let resultFrom973 = kClosest([[1,3],[-2,2]], 1);
let resultFrom973 = kClosest([[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]],5)
console.log(resultFrom973);

//Runtime: 363 ms, faster than 56.28% of TypeScript online submissions for K Closest Points to Origin.
//Memory Usage: 62.6 MB, less than 33.77% of TypeScript online submissions for K Closest Points to Origin.