//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
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
class ListNodeRemoveN{
    val: number;
    next: ListNodeRemoveN;
    constructor(val?: number, next?: ListNodeRemoveN | null){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class ContainerListNodeRemoveN{
    head: ListNodeRemoveN;

    constructor(){
      this.head = null;   
    }

    add(val: number){
        let newNode = new ListNodeRemoveN(val);
        if(this.head == null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
}


function removeNthFromEnd(head: ListNodeRemoveN | null, n: number): ListNodeRemoveN | null {
    let totalCount = 0; 
    let current = head;
    while(current){
        current = current.next
        totalCount++;
    }


    if(totalCount  == n){
        if(totalCount == 1){
            return null;
        }else{
            let temp4 = head;
            head = temp4.next
            temp4.next = null; 
        }
    }
    else{
        let itemAtIndex = totalCount - n;
        let pointer = head;
        while(itemAtIndex > 1){
            pointer = pointer.next
            itemAtIndex--;
        }
        
        let twoNext = null;
        if(pointer.next && pointer.next.next){
            twoNext = pointer.next.next
        }
        else{
            twoNext = null;
        }
        let temp = pointer.next;
        pointer.next = twoNext;
        temp.next = null;
    }
    return head;
};




var test = new ContainerListNodeRemoveN();
test.add(1);
removeNthFromEnd(test.head,1);
//Runtime: 84 ms, faster than 80.03% of TypeScript online submissions for Remove Nth Node From End of List.
//Memory Usage: 44.3 MB, less than 90.46% of TypeScript online submissions for Remove Nth Node From End of List.