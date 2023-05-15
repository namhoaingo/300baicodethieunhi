//https://leetcode.com/problems/reverse-integer/


// process
// convert number to string 
// put in on to a stack 
// pull from the stack


/**
 * 123
 * 3 -> 2 -> 1
 */

function reverse(x: number): number {
    return 1;
};

// implement a stack 
// stack is first in last out
// insert -> insert to the beginning 
// pop -> pop from the begining

class ReverseStringStack7{
    head: ReverseStringStack7_Node | null;

    constructor(){
    }

    insert = (num: number) => {
        const newNode = new ReverseStringStack7_Node();
        newNode.value = num;
        if(!this.head){
            this.head = newNode;
        }
        else{
            let tempHead = this.head;
            this.head = newNode;
            newNode.next = tempHead;
        }
    }

    pop  = (): ReverseStringStack7_Node | null => {
        if(!this.head){
            return null;
        }else{
            let tempHead = this.head;
            this.head = tempHead.next;
            tempHead.next = null;
            return tempHead;
        }
    }

    print = () =>{
        let nodeTemp = this.head;
        while(nodeTemp){
            console.log(nodeTemp.value);
            nodeTemp = nodeTemp.next;            
        }
    }
}

class ReverseStringStack7_Node{
    value: number;
    next: ReverseStringStack7_Node | null;

    constructor(){

    }
}

// Test Stack 

const testingStack7reverseInt = new ReverseStringStack7();
testingStack7reverseInt.insert(1);
testingStack7reverseInt.insert(2);
testingStack7reverseInt.insert(3);
testingStack7reverseInt.insert(4);

testingStack7reverseInt.print(); 
console.log(testingStack7reverseInt.pop());
console.log(testingStack7reverseInt.pop());
console.log(testingStack7reverseInt.pop());
