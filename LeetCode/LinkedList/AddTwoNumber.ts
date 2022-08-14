//https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list. */
  class ListNodeAddTwoNumber {
      val: number
      next: ListNodeAddTwoNumber | null
      constructor(val?: number, next?: ListNodeAddTwoNumber | null) {
         this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
     }
  }

  class ContainerListNodeAddTwoNum{
    head: ListNodeAddTwoNumber;

    add(val: number){
        let newNode = new ListNodeAddTwoNumber(val);
        if(!this.head){
            this.head = newNode
        }
        else{
            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next;
            }
            pointer.next = newNode;
        }
    }
  }


function addTwoNumbers(l1: ListNodeAddTwoNumber | null, l2: ListNodeAddTwoNumber | null): ListNodeAddTwoNumber | null {
    let currentl1 = l1;
    let currentl2 = l2;
    let resultHead = null;
    let resultPointer = null;
    let needCarryOver = false;
    while(currentl1 || currentl2 || needCarryOver){
        let resultSum = (currentl1? currentl1.val : 0) + (currentl2 ? currentl2.val : 0);
        if(needCarryOver){
            resultSum++;
        }
        needCarryOver = resultSum >= 10;
        let newNodeVal = resultSum >= 10 ? resultSum - 10: resultSum      
        let resultNode = new ListNodeAddTwoNumber(newNodeVal);

        if(!resultHead){
            resultHead = resultNode;
            resultPointer = resultNode;
        }
        else{            
            resultPointer.next = resultNode;
            resultPointer = resultPointer.next;
        }

        currentl1 = currentl1 ? currentl1.next : null;
        currentl2 = currentl2 ? currentl2.next : null;
        
    }
    return resultHead;

}

let l1 = new ContainerListNodeAddTwoNum();
l1.add(9)
l1.add(9)
l1.add(9)
l1.add(9)
l1.add(9)
l1.add(9)
l1.add(9)
let l2 = new ContainerListNodeAddTwoNum();

l2.add(9);
l2.add(9);
l2.add(9);
l2.add(9);

let resultAddTwoNum = addTwoNumbers(l1.head, l2.head);

//Runtime: 197 ms, faster than 29.34% of TypeScript online submissions for Add Two Numbers.
//Memory Usage: 47.6 MB, less than 96.99% of TypeScript online submissions for Add Two Numbers.
// NEED IMPROVEMENT