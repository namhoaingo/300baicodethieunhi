//https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list. */
  class CycleListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

  class ContainerCycleListNode{
    head: CycleListNode | null

    constructor(){

    }

    add(val: number, nextIndex: number | null){
        let newNode = new CycleListNode(val);
        if(!this.head){
            this.head = newNode 
        }else{
            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next;
            }

            pointer.next = newNode;

            if(nextIndex){
                let assignNext = this.head;
                let count = 0;
                while(count <= nextIndex){
                    assignNext = assignNext.next;
                    count++;
                }

                newNode.next = assignNext;
            }
        }
    }
  }
 
function hasCycle(head: ListNode | null): boolean {
    var fastPointer = head;
    var slowPointer = head;
    var firstNum = true;
    while(slowPointer && fastPointer){

        if(!firstNum && fastPointer == slowPointer){
            return true;
        }
        firstNum = false;
        if(fastPointer.next == null){
            return false;
        }
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    return false;
};




let testCycleLinkedListContainer = new ContainerCycleListNode();
testCycleLinkedListContainer.add(3, null);
testCycleLinkedListContainer.add(2, null)
testCycleLinkedListContainer.add(0, null)
testCycleLinkedListContainer.add(4, 1);

hasCycle(testCycleLinkedListContainer.head);
//Runtime: 121 ms, faster than 51.12% of TypeScript online submissions for Linked List Cycle.
//Memory Usage: 45.9 MB, less than 41.06% of TypeScript online submissions for Linked List Cycle.