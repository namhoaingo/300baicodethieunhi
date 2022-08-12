//https://leetcode.com/problems/reverse-linked-list/

// Definition for singly-linked list.

/**
 * Definition for singly-linked list.
*/ 

class LinkedList{
    private _head: ListNode;
    constructor(){
        this._head = null;
    }

    add(node: ListNode){        
        var current = this._head;
        if(current==null){
            this._head = node;
        }
        else{
            while(current.next != null){            
                current = current.next;
            }
            current.next = node;
        }
    }

    reverseList(): ListNode | null {
        var current = this._head; 
        var nxt: ListNode = null; 
        var prev: ListNode = null;

        while(current != null){
            // keep changing 
            var nxt = current.next;
            current.next = prev;        
            prev = current;
            current = nxt;
        }
        return prev;
    }
}

class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


var linkedList = new LinkedList();
linkedList.add(new ListNode(1));
linkedList.add(new ListNode(2));
linkedList.add(new ListNode(3));
linkedList.add(new ListNode(4));
linkedList.add(new ListNode(5));

linkedList.reverseList();

//Runtime: 97 ms, faster than 66.69% of TypeScript online submissions for Reverse Linked List.
//Memory Usage: 44.9 MB, less than 67.02% of TypeScript online submissions for Reverse Linked List.