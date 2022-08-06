//https://leetcode.com/problems/evaluate-reverse-polish-notation/
function evalRPN(tokens: string[]): number {
    if(tokens.length == 1){
        return Number(tokens[0]);
    }
    var polishStack = new PolishStack();
    var operandDict = {
        "+": 1,
        "-": 1,
        "*": 1,
        "/": 1
    };
    var result = 0;
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if(operandDict[token] != undefined){
            // pop two time and put back 
            var first = polishStack.pop();
            var second = polishStack.pop();
            switch(token){
                case "+":
                    result = second + first;
                    break;
                case "-":
                    result = second - first;
                    break;
                case "/":
                    result = Math.sign(second/first) >= 0 ? Math.floor(second/first) : Math.ceil(second/first);
                    break;
                case "*":
                    result = second * first;
                    break;
            }
            //console.log(result);
            polishStack.push(result);
        }
        else{
            polishStack.push(Number(token));
        }
    }

return result;
};

class PolishStack{
    private _headNode: PolishStackNode;
    constructor(){
        this._headNode = null;
    }

    push(value: number): void{
        var newNode = new PolishStackNode(value);
        if(this._headNode == null){
            this._headNode = newNode;
        }else{
            var currentNode = this._headNode;
            this._headNode = newNode;
            newNode.setRight(currentNode);
        }
    }

    pop(): number{
        var currentNode = this._headNode;
        if(currentNode.getRight() == null){
            this._headNode = null;
        } else{
            this._headNode = currentNode.getRight();
            currentNode.setRight(null);
        }
        return currentNode.value();
    }
}

class PolishStackNode{
    private _value: number;
    private _rightNode: PolishStackNode;

    constructor(value: number){
        this._value = value;
    }

    value(): number{
        return this._value;
    }

    getRight(): PolishStackNode{
        return this._rightNode;
    }

    setRight(node: PolishStackNode): void{
        this._rightNode = node;
    } 
}

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));

//Runtime: 125 ms, faster than 46.76% of TypeScript online submissions for Evaluate Reverse Polish Notation.
//Memory Usage: 46.3 MB, less than 46.04% of TypeScript online submissions for Evaluate Reverse Polish Notation.