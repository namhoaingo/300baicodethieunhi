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
   
};

var test = new ContainerListNodeReorderList();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.add(6);

reorderList(test.head);