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

class DoubleEndedQueue{
    private _headNode : QueueNode; 
    private _tailNode : QueueNode; 
    private _size : Number;

    constructor(){
        this._size = 0;
    }

    // Add Head
    // Remove Head
    // Add Tail
    // Remove Tail

}

class QueueNode{
    private _value: number;
    private _leftNode: QueueNode;
    private _rightNode: QueueNode;

    constructor(value: number){
        this._value = value;
    }
}