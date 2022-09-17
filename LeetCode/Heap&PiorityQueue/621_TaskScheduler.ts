//https://leetcode.com/problems/task-scheduler/


//A -> B -> A -> C -> A -> D -> A-> E -> A -> F -> G -> A ->  
function leastInterval(tasks: string[], n: number): number {
// create the array with count
    let dict = new Object();
    tasks.forEach(ele =>{
        if(dict[ele] == undefined){
            dict[ele] = 1;
        }
        else{
            dict[ele]++;
        }
    })

    let unsortedTaskArray = new Array<TaskLetter>();
    Object.keys(dict).forEach(taskCountKey => {
        let taskLetter = new TaskLetter(taskCountKey, dict[taskCountKey]);
        unsortedTaskArray.push(taskLetter);
    })

    return 1;
};

class TaskLetter{
    letter: string;
    count: number;

    constructor(_letter: string, _count: number){
        this.letter = _letter;
        this.count = _count;
    }
}

class maxHeapTask{
    unsortedArrayTask: Array<TaskLetter>
    constructor(){
        this.unsortedArrayTask = new Array<TaskLetter>();
    }

    add(taskLetter: TaskLetter){
        
    }

    private maxHeapifyParent(currentIndex: number, endIndex: number){
        let parentIndex = Math.floor((currentIndex -1)/2);
        while(true){
            if(currentIndex == parentIndex || parentIndex < endIndex){
                break;
            }
            else{
                if(this.unsortedArrayTask[parentIndex].count < this.unsortedArrayTask[currentIndex].count){
                    // swap
                    this.swapA_B(parentIndex, currentIndex);
                    currentIndex = parentIndex;
                }
                else{
                    break
                }
            }
        }
    }
    
    pop(): TaskLetter{

    }

    private maxHeapifyChildren(currentIndex: number, endIndex: number){
        while(true){
            let leftChildIndex = currentIndex * 2 + 1;
            let rightChildIndex = currentIndex * 2 + 2;
            if(leftChildIndex  <= endIndex && rightChildIndex <= endIndex){
                if(this.unsortedArrayTask[currentIndex].count 
                    < 
                    Math.max(this.unsortedArrayTask[leftChildIndex].count, 
                            this.unsortedArrayTask[rightChildIndex].count)){
                                if(this.unsortedArrayTask[leftChildIndex].count 
                                    > this.unsortedArrayTask[rightChildIndex].count){
                                        this.swapA_B(currentIndex, leftChildIndex);
                                        currentIndex = leftChildIndex;
                                    }else{
                                        this.swapA_B(currentIndex, rightChildIndex);
                                        currentIndex = rightChildIndex;
                                    }
                            }
                else{
                    break;
                }
            }
            else if(leftChildIndex <= endIndex && rightChildIndex > endIndex){
                if(this.unsortedArrayTask[currentIndex].count < this.unsortedArrayTask[leftChildIndex].count){
                    this.swapA_B(currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                }
                else{
                    break;
                }
            }
            else if(rightChildIndex <= endIndex && leftChildIndex > endIndex){
                if(this.unsortedArrayTask[currentIndex].count < this.unsortedArrayTask[rightChildIndex].count){
                    this.swapA_B(currentIndex, rightChildIndex);
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

    private swapA_B(index_a: number, index_b: number){
        let temp = this.unsortedArrayTask[index_a];
        this.unsortedArrayTask[index_a] = this.unsortedArrayTask[index_b];
        this.unsortedArrayTask[index_b] = temp;
    }
}

// Test Class
let result621 = leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2);