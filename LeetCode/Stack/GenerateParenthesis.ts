//https://leetcode.com/problems/generate-parentheses/
// Bai nay qua kho luon 
// Dung recursive va stack 
// kho that, neu khong dung recursive chac kho co the giai quyet duoc
function generateParenthesis(n: number): string[] {
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

    constructor(){
        this._head = null;
        this._size = 0;
    }

    pop(): void{
        if(this._size <= 1){
            this._head = null; 
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
        }
        else{
            var temp = this._head;
            this._head = newNode;
            newNode.setRight(temp);
            
        }
        this._size++;
    }

    peek(): T{
        return this._head.value();
    }

    toString(): string{
        var currentNode = this._head;
        var result: string;
        while(currentNode != null){
            result = result + currentNode.value();
            currentNode = currentNode.getRight();
        }
        return result;
    }

    print(): void{
        var currentNode = this._head;
        while(currentNode != null){
            console.log(currentNode.value());
            currentNode = currentNode.getRight();
        }
    }
}

class StackNode<T>{
    private _value: T;
    private _rightNode: StackNode<T>;

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
}


console.log(generateParenthesis(3));