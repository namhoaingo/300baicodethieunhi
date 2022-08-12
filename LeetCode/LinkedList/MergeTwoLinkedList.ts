//https://leetcode.com/problems/merge-two-sorted-lists/

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

class ListNode{
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null)   {
        this.val = (val===undefined ? 0: val);
        this.next = (next===undefined ? null : next);
    }
}

class ListNodeContainer{
    head: ListNode | null; 

    constructor(){};
    
    add(value: number){
        var node = new ListNode(value);
        var currentNode = this.head; 
        if(this.head ==  null){
            this.head = node;
        }
        else{
            while(currentNode.next != null){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    var newList = new ListNode();
    var newListCurrent = newList;
    var current1 = list1;
    var current2 = list2; 
    while(current1 != null && current2 != null){
        if(current1.val <= current2.val){
            newListCurrent.next = current1;
            current1 = current1.next;
        }else{
            newListCurrent.next = current2;
            current2 = current2.next;
        }
        newListCurrent = newListCurrent.next
    }

    if(current1 == null && current2 != null){
        newListCurrent.next = current2;
    }else{
        newListCurrent.next = current1;
    }
    return newList;
};


// testing 
var linkedListContainer1 = new ListNodeContainer();
linkedListContainer1.add(1);
linkedListContainer1.add(2);
linkedListContainer1.add(3);
linkedListContainer1.add(4);

var linkedListContainer2 = new ListNodeContainer();
linkedListContainer2.add(1);
linkedListContainer2.add(3);
linkedListContainer2.add(5);
linkedListContainer2.add(6);

var result = mergeTwoLists(linkedListContainer1.head, linkedListContainer2.head);

