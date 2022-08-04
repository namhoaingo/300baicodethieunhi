//https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean {
    var newStack = new stack();
    var matching = true;
    var pushingString = {"[": 1, "(": 1, "{": 1};
    var poppingString = {"]": 1, ")": 1, "}": 1};
    
    for(var i = 0; i < s.length; i++){
        if(pushingString[s[i]] == 1){
            newStack.put(s[i]);
        }
        
        if(poppingString[s[i]] == 1){
            var topNode = newStack.pop();
            if( topNode == undefined || !isMatch(topNode.value(), s[i])){
                return false;
            }
        }
    }

    return newStack.count() == 0;
};

function isMatch(s1: string, s2: string): boolean{
    if(s1 == "[" && s2 == "]")
    {
        return true;
    }

    if(s1 == "(" && s2 == ")")
    {
        return true;
    }

    if(s1 == "{" && s2 == "}")
    {
        return true;
    }

    return false;
}

class stack{
    private _size: number = 0;
    private _head: stack_node;
    constructor(){

    }
    
    count(): number{
        return this._size;
    }
    
    // put to the left
    put(value: string): void{
        var adding_node = new stack_node(value);
        if(this._head == undefined){
            this._head = adding_node;
        }
        else{
            var pointer: stack_node = this._head;
            this._head = adding_node;
            this._head.setRightNode(pointer);
        }
        this._size = this._size + 1;
    }

    // pop from the left
    pop(): stack_node{
        if(this._size == 0){            
            return null;
        }

        if(this._size == 1){
            var temp = this._head;
            this._head = undefined;
            this._size--;
            return temp;
        }
        this._size--;
        var temp = this._head;
        this._head = this._head.getRightNode();
        return temp;
    }

    
    print_out(): void{
        var pointer = this._head;
        while(pointer != undefined){
            console.log(pointer.value());
            pointer = pointer.getRightNode();
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

console.log(isValid("(]"));
