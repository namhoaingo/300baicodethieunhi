// Problem with Timeout

function calculate(s: string): number {
  const start = Date.now();

    /**
     * 1. Two Stack to keep track of number and operand
     * 2. If / * are found, perform the nearest calculation right away
     * 3. At the end, perform calculation for + and -
     */

    let numbers: LinkedList227<number> = new LinkedList227<number>();

    let operands: LinkedList227<string> = new LinkedList227<string>();

    const action = (a: number, b: number, operand: string): number =>{
        switch (operand){
            case "+":
                return a + b;
            case "/":
                return Math.floor(a / b);
            case "-":
                return a - b;
            case "*":
                return a * b;
        }
    };

    const isOperand = (charactor: string): boolean =>{
        switch (charactor){
            case "+":
                case "-":
                    case "/":
                        case "*":
                            return true;
                        default: 
                        return false;
        }
    }

    const isMultipleOrDivide = (charactor: string): boolean => {
        switch (charactor){
            case "*":
                case "/":
                    return true;
                    default:
                        return false;
        }
    }

    let calculateRightAway = false;
     
    s.split(new RegExp("([+-/*//])")).forEach(element => {
        if(element === " ")
        {
            return;
        }
       if(isOperand(element)){
            operands.addToHead(new ListNode227<string>(element));
            if(isMultipleOrDivide(element)){
                calculateRightAway = true;
                return;
            }
            return;
       }
       if(calculateRightAway){
            let multpleOrDivideResult = action(numbers.popFromHead(), Number.parseInt(element), operands.popFromHead());
            numbers.addToHead(new ListNode227<number>(multpleOrDivideResult));
            calculateRightAway = false;
            return;
       }
       numbers.addToHead(new ListNode227<number>(Number.parseInt(element)));
    })

  const endFirstLoop = Date.now();
  //console.log("elapseFirstLoop", (endFirstLoop - start)/1000);

  const startSecond = Date.now();


    //  //console.log(operands);
    //  //console.log(numbers);
    
    while(operands.count > 0){
        let leftNum = numbers.popFromTail();
        let rightNum = numbers.popFromTail();
        let operand = operands.popFromTail();
        // console.log("right", rightNum);
        // console.log("left", leftNum);
        // console.log("operand", operand);

        let plusOrMinus = action(leftNum, rightNum, operand);
        numbers.addToTail(new ListNode227<number>(plusOrMinus));
        
    }
  
    const endSecond = Date.now();
    //console.log("elapse Second", (endSecond - startSecond)/1000);
    return numbers.popFromHead();
};


class ListNode227<T>{
    value: T;
    next: ListNode227<T>;
    prev: ListNode227<T>;

    constructor(value: T){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList227<T>{
    head: ListNode227<T>;
    tail: ListNode227<T>;
    count: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    // Add to the head
    public addToHead(newNode: ListNode227<T>){
        let tempHead = this.head;
        if(tempHead == null){
            this.tail = newNode;
            this.head = newNode;
        }
        else{
            this.head = newNode;
            newNode.next = tempHead;
            tempHead.prev = newNode;
        }
        this.count++;
    }

    // Add to the Tail 
    public addToTail(newNode: ListNode227<T>){
        let tempTail = this.tail;
        if(tempTail == null){
            this.tail = newNode;
            this.head = newNode;
        }
        else{
            this.tail = newNode;
            newNode.prev = tempTail;
            tempTail.next = newNode;
        }
        this.count++;
    }

    // remove from the head
    public popFromHead(): T{
       // if head is empty 
        if(this.head == null){
            return null;
        }

       // if head is the only one
        if(this.head.next == null){
            let tempHead = this.head;
            this.head = null;
            this.tail = null;
            this.count--;
            return tempHead.value;
        }

        // There is more than a head in the list
        let tempHead = this.head;
        this.head = tempHead.next;
        this.head.prev = null;
        // remove the only link from the removed temp head
        tempHead.next = null;
        this.count--;
        return tempHead.value;
    }

    public popFromTail():T{
        // I need a double linked list to better remove from tail 
        // if the tail is empty
        if(this.tail == null){
            return null;
        }

        // if tail is the only one
        if(this.tail.prev == null){
            let tempTail = this.tail;
            this.tail = null;
            this.head = null;
            this.count--;
            return tempTail.value;
        }

        // if there is more than a tail in linked list 
        let tempTail = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.count--;
        return tempTail.value;
    }

    public print(): void{
        let tempNode: ListNode227<T>;
        tempNode = this.head;
        while(tempNode != null){
            //console.log(tempNode.value);
            tempNode = tempNode.next;
        }
    }
}

//console.log(calculate("1+2-4"));


// Test Linked List 

// let testLinkedList = new LinkedList227<string>();
// testLinkedList.addToHead(new ListNode227<string>("a"));
// testLinkedList.addToHead(new ListNode227<string>("b"));
// testLinkedList.addToHead(new ListNode227<string>("c"));
// testLinkedList.print();
// //console.log("-------------------");

// //console.log(testLinkedList.popFromHead());
// //console.log(testLinkedList.count);

// //console.log("-------------------");
// //console.log(testLinkedList.popFromHead());
// //console.log(testLinkedList.count);

// //console.log("-------------------");
// //console.log(testLinkedList.popFromHead());
// //console.log(testLinkedList.count);

// //console.log("-------------------");
// //console.log(testLinkedList.popFromHead());
// //console.log(testLinkedList.count);

// //console.log("-------------------");
// testLinkedList.addToHead(new ListNode227<string>("a"));
// testLinkedList.addToHead(new ListNode227<string>("b"));
// testLinkedList.addToHead(new ListNode227<string>("c"));
// testLinkedList.print();

// //console.log("-------------------");
// //console.log(testLinkedList.popFromTail());
// //console.log(testLinkedList.count);


// //console.log("-------------------");
// //console.log(testLinkedList.popFromTail());
// //console.log(testLinkedList.count);


// //console.log("-------------------");
// //console.log(testLinkedList.popFromTail());
// //console.log(testLinkedList.count);

// //console.log("-------------------");
// testLinkedList.print();


 