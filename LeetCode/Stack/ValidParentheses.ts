//https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean {
    var newStack = new stack();
    newStack.put("a");
    newStack.print_out();
    newStack.put("b");
    newStack.print_out();
};

class stack{
    private _size: number = 0;
    private _left_most_node: stack_node;
    constructor(){

    }
    
    count(): number{
        return this._size;
    }
    
    // put to the left
    put(value: string): void{
        var adding_node = new stack_node(value);
        if(this._left_most_node == undefined){
            this._left_most_node = adding_node;
        }
        else{
            var pointer: stack_node = this._left_most_node;
            this._left_most_node = adding_node;
            this._left_most_node.setRightNode(pointer);
        }
        this._size = this._size + 1;
    }

    // pop from the left
    pop(): stack_node{
        if(this._size == 0){
            return null;
        }

        if(this._size == 1){
            var temp = this._left_most_node;
            this._left_most_node = undefined;
            return temp;
        }
    }

    
    print_out(): void{
        var pointer = this._left_most_node;
        while(pointer.getRightNode() != undefined){
            console.log(pointer.value());
        }
    }
}

class stack_node{
    private _value : string;
    private _right_node : stack_node;
    constructor(value: string){
        this._value = value;
    }

    setRightNode(right_node: stack_node): void{
        this._right_node = right_node;
    }

    getRightNode(): stack_node{
        return this._right_node;
    }

    value(): string{
        return this._value;
    }
}