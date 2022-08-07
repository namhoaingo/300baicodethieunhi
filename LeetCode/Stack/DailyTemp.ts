//https://leetcode.com/problems/daily-temperatures/
function dailyTemperatures(temperatures: number[]): number[] {
// Loop from the right to left
       var stack = new GenericStackTemp<number>();
       var stackResult = new GenericStackTemp<number>();
        var maxTemp: number = Number.MIN_VALUE;

       for(var i = temperatures.length - 1; i >=0; i--){
           if(stack.size() == 0){
               stackResult.push(0);
               stack.push(temperatures[i]);
               maxTemp = temperatures[i];           
           } 
           else if(temperatures[i] >= maxTemp){
                maxTemp = temperatures[i];    
                stack.empty();
                stack.push(temperatures[i]);
                stackResult.push(0);
           }
           else{
                var tomorrowTemp = stack.head();
                var dayUntil = 1;
                while(temperatures[i] >= tomorrowTemp.value()){
                    tomorrowTemp = tomorrowTemp.getRight();
                    dayUntil++;
                }
                stack.push(temperatures[i]);
                stackResult.push(dayUntil);
           }
       }
       return stackResult.result();
};


class GenericStackTemp<T>{
    private _head: StackNodeTemp<T>;
    private _size: number;
    private _tail: StackNodeTemp<T>;
     

    constructor(){
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    head(): StackNodeTemp<T>{
        return this._head;
    }

    empty(): void{
        this._head = null;
        this._tail = null;
        this._size = 0;
    }
    size(): number{
        return this._size;
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
        var newNode = new StackNodeTemp(value);
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

    result(): number[]{
        var answer = new Array();
        var curentNode = this._head;
        while(curentNode != null){
            answer.push(curentNode.value());
            curentNode = curentNode.getRight();
        }
        return answer;
    }

}

class StackNodeTemp<T>{
    private _value: T;
    private _rightNode: StackNodeTemp<T>;
    private _leftNode: StackNodeTemp<T>;
    
    constructor(value: T){
        this._value = value;
    }    

    value(): T{
        return this._value;
    }

    getRight(): StackNodeTemp<T>{
        return this._rightNode;
    }

    setRight(stackNode: StackNodeTemp<T>){
        this._rightNode = stackNode;
    }

    getLeft(): StackNodeTemp<T>{
        return this._leftNode;
    }
    
    setLeft(stackNode: StackNodeTemp<T>){
        this._leftNode = stackNode;
    }
}

console.log(dailyTemperatures([34,80,80,34,34,80,80,80,80,34]));
//Runtime: 5153 ms, faster than 5.23% of TypeScript online submissions for Daily Temperatures.
//Memory Usage: 86 MB, less than 5.23% of TypeScript online submissions for Daily Temperatures.

// NEED TO DO BETTER