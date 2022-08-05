//https://leetcode.com/problems/min-stack/
// if number is bigger than min, no care
// if number is smaller, insert in the left of the stack
// when pop, check to see if the number poping is the min, then remove it from the list

// having two stack
// one is normal stack 
// one is min stack 
class MinStack {
    // Stack la first in last out
    // put thing ONTOP of each other
    private _min: number;
    private _topOfStack: StackNode;
    private _size: number;
    constructor() {
        // Init the stack object
        this._min = Math.min();
        this._size = 0;
    }

    push(val: number): void {
        var newNode = new StackNode(val);
        // pushes the element val onto the stack
        if(this._size == 0) {
            this._topOfStack = newNode;
        }
        else{
            var temp = this._topOfStack;
            this._topOfStack = newNode;
            newNode.setRight(temp);
        }
        this._min = Math.min(this._min, val);
        this._size = this._size + 1;
    }

    pop(): void {
       // remove the element on top of the stack 
       if(this._size == 1){
            this._topOfStack = null;
       }
       else{
            var temp = this._topOfStack;
            this._topOfStack.setRight(temp.getRight());
       }

       this._size = this._size - 1;
    }

    top(): number {
       // get the top element of the stack 
    }

    getMin(): number {
        // retrieve the minmum element of the stack
    }
}

class StackNode{
    private _value: number;
    private _right: StackNode;

    constructor(value: number){
        this._value = value;
    }

    value(): number{
        return this._value;
    }

    setRight(node: StackNode): void{
        this._right = node;
    }

    getRight(): StackNode{
        return this._right;
    }

}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */