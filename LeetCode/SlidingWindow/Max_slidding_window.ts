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
            this._headNode.setRightNode(current);
            current.setLeftNode(newHeadNode);
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
            this._headNode = currentHead.rightNode();
            this._headNode.setLeftNode(null);
            currentHead.setRightNode(null);
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

        }
    }

    rightNode(): QueueNode {
        return this._leftNode;
    }

    setLeftNode(node: QueueNode): void {
        this._leftNode = node;
    }

    setRightNode(node: QueueNode): void {
        this._rightNode = node;
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
}