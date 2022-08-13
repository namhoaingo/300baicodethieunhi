//https://leetcode.com/problems/reorder-list/

/**
 * 
 * 
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
class ListNodeReoderList{
    val: number;
    next: ListNodeReoderList;
    constructor(val?: number, next?: ListNodeReoderList | null){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class ContainerListNodeReorderList{
    head: ListNodeReoderList;

    constructor(){
      this.head = null;   
    }

    add(val: number){
        var newNode = new ListNodeReoderList(val);
        if(this.head == null){
            this.head = newNode;
        }else{
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

function reorderList(head: ListNodeReoderList | null): void {
   let slowPointer = head;
   let fastPointer = head;

   let originalHead = head;
   //loop until the end
   while(fastPointer != null && fastPointer.next != null){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
   }

   // start flipping
   let temp = null; 
   let prev = null; 
   while(slowPointer){
    temp = slowPointer.next;
    slowPointer.next = prev;
    prev = slowPointer;
    slowPointer = temp;
   }


   // merge the array
   while(originalHead.next && prev.next){
    let temp2 = originalHead.next
    let temp3 = prev.next
    originalHead.next = prev
    prev.next = temp2;
    originalHead = temp2;
    prev = temp3
   }

};

var test = new ContainerListNodeReorderList();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.add(6);
//test.add(7);

reorderList(test.head);


//Runtime: 95 ms, faster than 98.31% of TypeScript online submissions for Reorder List.
//Memory Usage: 50.8 MB, less than 70.62% of TypeScript online submissions for Reorder List.