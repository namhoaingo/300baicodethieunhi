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
    private _normalStack: NormalStack;
    private _increasingStack: IncreasingStack;
    constructor() {
        this._normalStack = new NormalStack();
        this._increasingStack = new IncreasingStack();
    }

    push(val: number): void{
        this._normalStack.push(val);
        this._increasingStack.push(val);
    }

    pop(): void{
        var poppingValue = this._normalStack.pop();
        this._increasingStack.popIncreasingStack(poppingValue);
    }

    top(): number{
        return this._normalStack.top();
    }

    getMin(): number {
        // retrieve the minmum element of the stack
        return this._increasingStack.top();
    }
}

class NormalStack{
    private _topOfNormalStack: StackNode;
    private _size: number;
    constructor(){
        this._size = 0;
        this._topOfNormalStack = null;
    }
    push(val: number): void {
        var newNode = new StackNode(val);
        // pushes the element val onto the stack
        if(this._size == 0) {
            this._topOfNormalStack = newNode;
        }
        else{
            var temp = this._topOfNormalStack;
            this._topOfNormalStack = newNode;
            newNode.setRight(temp);
        }
        this._size = this._size + 1;
    }

    pop(): number {
       // remove the element on top of the stack 
       var currentTop = this._topOfNormalStack;
       if(this._size == 1){
            this._topOfNormalStack = null;
       }
       else{
            this._topOfNormalStack = currentTop.getRight();
       }

       this._size = this._size - 1;
       return currentTop.value();
    }
    
    top(): number {
        return this._topOfNormalStack.value();
    }
}

class IncreasingStack extends NormalStack{
    // Bigger than top thi NO CARE
    // Small than top thi insert on left
    private _sizeIncreasingStack: number;
    constructor(){
        super();
        this._sizeIncreasingStack = 0;        
    }

    push(value: number): void{
        if(this._sizeIncreasingStack ==0){
            super.push(value);            
            this._sizeIncreasingStack++;
        }
        else{
            var currentTop = this.top();
            if(value <= currentTop){
                super.push(value); 
                this._sizeIncreasingStack++;
            }    
        }    
    }

    popIncreasingStack(value: number): void{
        if(value == this.top()){
            super.pop();
            this._sizeIncreasingStack--;
        }
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

// region Testing 

var minStack = new MinStack();

minStack.push(1);
minStack.push(2);
console.log(minStack.top());
console.log(minStack.getMin());
minStack.pop();

console.log(minStack.getMin());
console.log(minStack.top());
// end Testing

//Runtime: 131 ms, faster than 86.49% of TypeScript online submissions for Min Stack.
//Memory Usage: 52.4 MB, less than 10.00% of TypeScript online submissions for Min Stack.