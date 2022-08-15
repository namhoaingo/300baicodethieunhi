//https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 */
 
 class ListNodeMergeKList {
      val: number
      next: ListNodeMergeKList | null
      constructor(val?: number, next?: ListNodeMergeKList | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 
class ContainerListNodeMergeKList{
    head: ListNodeMergeKList;
    constructor(){};

    add(val: number){
        let newNode = new ListNodeMergeKList(val);
        if(this.head){
            let currentPointer = this.head;
            while(currentPointer.next){
                currentPointer = currentPointer.next;
            }
            currentPointer.next = newNode;
        }else{
            this.head = newNode;
        }
    }
}

function mergeKLists(lists: Array<ListNodeMergeKList | null>): ListNodeMergeKList | null {
    return mergeSort_linkedList(0, lists.length - 1, lists);
};

function mergeSort_linkedList(start: number, end: number, lists: Array<ListNodeMergeKList | null>): ListNodeMergeKList{
    if(start == end){
        return lists[start];
    }
    let mid = Math.floor((start + end)/2);
    let left = mergeSort_linkedList(start, mid, lists);
    let right = mergeSort_linkedList(mid, end, lists);
    let result = merge_linkedList(left, right);
    return result;
}

function merge_linkedList(l1: ListNodeMergeKList, l2: ListNodeMergeKList): ListNodeMergeKList{
    // sort 2 cai list
    let newNodeCurrent = null;
    let newNodeHead = null;
    let currentL1 = l1;
    let currentL2 = l2;
    while(currentL1 && currentL2){
        if(currentL1.val > currentL2.val){
           newNodeHead = addtoNewNode(newNodeCurrent, newNodeHead, currentL2);
        }else{
          newNodeHead =  addtoNewNode(newNodeCurrent, newNodeHead, currentL1);
        }
    }

    if(currentL1 && !currentL2){
        newNodeHead = addtoNewNode(newNodeCurrent, newNodeHead, currentL1);
    }

    if(!currentL1 && currentL2){
        newNodeHead = addtoNewNode(newNodeCurrent, newNodeHead, currentL2);
    }

    return newNodeHead;
}

function addtoNewNode(newNodeCurrent: ListNodeMergeKList, newNodeHead: ListNodeMergeKList, smallerNode: ListNodeMergeKList){
    if(newNodeCurrent){
        newNodeCurrent.next = smallerNode;
    }else{
        newNodeCurrent = smallerNode;
        newNodeHead = smallerNode;
    }
    newNodeCurrent = smallerNode;
    smallerNode = smallerNode.next;

    return newNodeHead;
}



// testing
let l1test = new ContainerListNodeMergeKList();
l1test.add(1);
l1test.add(4);
l1test.add(5);

let l2test = new ContainerListNodeMergeKList();
l2test.add(1);
l2test.add(3);
l2test.add(4);

let l3test = new ContainerListNodeMergeKList();
l3test.add(2);
l3test.add(6);

mergeKLists(new Array<ListNodeMergeKList>(l1test.head, l2test.head, l3test.head));
