//https://leetcode.com/problems/generate-parentheses/
// Bai nay qua kho luon 
// Dung recursive va stack 
// kho that, neu khong dung recursive chac kho co the giai quyet duoc
function generateParenthesisStack(n: number): string[] {
    // create two array, and merge each one 
    var stack = new GenericStack<string>();
    var result = new Array();
    generate(0, 0, n, stack, result);
    return result;
};

function generate(openN: number, closeN: number, 
                    total: number, stack: GenericStack<string>, 
                    result: string[]){
    if (openN == closeN && openN == total){
        result.push(stack.toString());
        return;
    }

    if(openN < total){
        stack.push("(");
        generate(openN + 1, closeN, total, stack, result);
        stack.pop();
    }

    if(closeN < openN){
        stack.push(")");
        generate(openN, closeN+ 1, total, stack, result);
        stack.pop();
    }
}

class GenericStack<T>{
    private _head: StackNode<T>;
    private _size: number;
    private _tail: StackNode<T>;
    
    constructor(){
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    pop(): void{
        if(this._size <= 1){
            this._head = null;
            this._tail = null; 
            this._size = 0;
        }
        else{
            var temp = this._head;
            this._head = temp.getRight();
            temp.setRight(null);
            this._size--;
        }
    }

    push(value: T): void{
        var newNode = new StackNode(value);
        if(this._size == 0){
            this._head = newNode;
            this._tail = newNode;
        }
        else{
            var temp = this._head;
            this._head = newNode;
            newNode.setRight(temp);
            temp.setLeft(this._head);
        }
        this._size++;
    }

    peek(): T{
        return this._head.value();
    }

    toString(): string{
        // TO string nen nguoc lai, vi the hien
        // la cai nao nen pop truoc
         var currentNode = this._tail;
         var result = "";
        while(currentNode != null){
            result = result + currentNode.value();
            currentNode = currentNode.getLeft();
        } 
        return result;
    }

    print(): void{
        var currentNode = this._tail;
        while(currentNode != null){
            console.log(currentNode.value());
            currentNode = currentNode.getLeft();
        }
    }
}

class StackNode<T>{
    private _value: T;
    private _rightNode: StackNode<T>;
    private _leftNode: StackNode<T>;
    
    constructor(value: T){
        this._value = value;
    }    

    value(): T{
        return this._value;
    }

    getRight(): StackNode<T>{
        return this._rightNode;
    }

    setRight(stackNode: StackNode<T>){
        this._rightNode = stackNode;
    }

    getLeft(): StackNode<T>{
        return this._leftNode;
    }
    
    setLeft(stackNode: StackNode<T>){
        this._leftNode = stackNode;
    }
}


console.log(generateParenthesisStack(4));


//Runtime: 86 ms, faster than 77.75% of TypeScript online submissions for Generate Parentheses.
//Memory Usage: 44.9 MB, less than 53.66% of TypeScript online submissions for Generate Parentheses.
// I did not do this by myself, I need a HUGE help from the solution
// SU ket hop vl giua BACK TRACKING va Stack (nhung khi in thi phai in tu cuoi) ==> qua kho