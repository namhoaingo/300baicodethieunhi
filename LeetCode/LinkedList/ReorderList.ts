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
    let size = 0;
   // create a reverse list
   let newHeadNode = null;

   let current = head;
   while(current){
     let temp = newHeadNode;
     let newNode = new ListNodeReoderList(current.val);
     newHeadNode = newNode;
     newNode.next = temp;
     current = current.next;
     size++;
   }
   
   // swap in place
   let array1 = head;
   let array2 = newHeadNode;
   //array1.next = null;
   //array2.next = null;
   for(let i = 0; i < Math.floor((size) / 2); i++){
            // swap
            let temp1 = array1.next;
            let newNodeFrom2 = new ListNodeReoderList(array2.val);

            array1.next = newNodeFrom2;
            if(i == Math.floor(size/2)-1 && size %2 != 0){
                newNodeFrom2.next = temp1;
            }
            array1 = temp1
            array2 = array2.next;
   }

   array2.next = null;
   array1.next = null;
};

var test = new ContainerListNodeReorderList();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.add(6);

reorderList(test.head);