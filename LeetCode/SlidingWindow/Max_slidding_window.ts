//https://leetcode.com/problems/sliding-window-maximum/

// Solve this by using a queue
// each move we will 
//1. Take a number out
//2. Add a number in
//1. When take a number out, if it is bigger or equal the biggest. remove the 
// biggest. 
// check the number, remove 
//2. 
function maxSlidingWindow(nums: number[], k: number): number[] {

   var doubleQueue = new DoubleEndedQueue();
   doubleQueue.addHead(1);
   doubleQueue.printFromHead();
   doubleQueue.addHead(2);
   doubleQueue.printFromHead();
   doubleQueue.addHead(3);
   doubleQueue.printFromHead();
   doubleQueue.addHead(4);
   doubleQueue.printFromHead();
   doubleQueue.addHead(5);
   doubleQueue.printFromHead();
   doubleQueue.printFromTail();
   
    return new Array();
};

class DoubleEndedQueue {
    private _headNode: QueueNode;
    private _tailNode: QueueNode;
    private _size: number;

    constructor() {
        this._size = 0;
    }

    // Add Head
    addHead(value: number): void {
        var newHeadNode = new QueueNode(value);
        if(this._size > 0){
            var current = this._headNode;
            this._headNode = newHeadNode;
            this._headNode.setRight(current);
            current.setLeft(newHeadNode);
        }
        else{
           this._headNode = newHeadNode;
           this._tailNode = newHeadNode; 
        }
        this._size = this._size + 1;  
    }

    // Remove Head
    removeHead(): QueueNode {
       if(this._size > 1){
            var currentHead = this._headNode;
            this._headNode = currentHead.getRight();
            this._headNode.setLeft(null);
            currentHead.setRight(null);
            this._size = this._size - 1;
            return currentHead;
        }
        else if(this._size == 1){
           var currentHead = this._headNode;
           this._headNode = null;
           this._tailNode = null;
           this._size = this._size - 1;
           return currentHead; 
        }
        else{
            return null;
        }
    }

    // Add Tail . With the add tail, need to put it on the correct spot
    addTail(value: number): void {
        if(this._size > 0){
            var newTailNode = new QueueNode(value);
            var currentTail = this._tailNode;
            this._tailNode = newTailNode;
            currentTail.setRight(newTailNode);
            this._tailNode.setLeft(currentTail);
            this._size = this._size + 1;
        }
        else if(this._size == 0){
            var newTailNode = new QueueNode(value);
            this._tailNode = newTailNode;
            this._headNode = newTailNode;
            this._size = this._size + 1; 
        }
    }

    removeTail(): QueueNode{
        if(this._size == 0){
            return null;
        }
        else if(this._size == 1){
            var currentTail = this._headNode;
            this._headNode = null;
            this._tailNode = null;
            this._size = 0;
            return currentTail;
        }
        else{
            var currentTail = this._tailNode;
            this._tailNode = currentTail.getLeft();
            this._tailNode.setRight(null);
            currentTail.setLeft(null);
            this._size = this._size - 1;
            return currentTail;
        }
    }

    printFromHead(): void{
        console.log("****************************************");
        var currentNode = this._headNode;
        while(currentNode != null){
            console.log(currentNode.value());
            currentNode = currentNode.getRight();
        }
    }

    printFromTail(): void{
        console.log("****************************************");
        var currentNode = this._tailNode;
        while(currentNode != null){
            console.log(currentNode.value());
            currentNode = currentNode.getLeft();
        }
    }
}


class QueueNode{
    private _value: number;
    private _leftNode: QueueNode;
    private _rightNode: QueueNode; 
    
    constructor(value: number){
       this._value = value; 
       this._leftNode = null;
       this._rightNode = null;
    }
    
    getLeft(): QueueNode{
        return this._leftNode;
    } 

    getRight(): QueueNode{
        return this._rightNode;
    }

    setLeft(leftNode: QueueNode): void{
        this._leftNode = leftNode;
    }

    setRight(rightNode: QueueNode): void{
        this._rightNode = rightNode;
    }

    value(): number{
        return this._value;
    }
}
console.log(maxSlidingWindow([1], 2));