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
    return mergeSort_linkedList(lists);
};

function mergeSort_linkedList(lists: Array<ListNodeMergeKList | null>): ListNodeMergeKList{
    if(lists.length == 1){
        return lists[0];
    }

    let mid = Math.floor( lists.length/2);
    let leftArray = lists.splice(0, mid);
    let rightArray = lists.splice(mid, lists.length);
    let left = mergeSort_linkedList(leftArray);
    let right = mergeSort_linkedList(rightArray);
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
            let addingNode = new ListNodeMergeKList(currentL2.val);
            if(newNodeHead){
                newNodeCurrent.next = addingNode;
            }else{
                newNodeCurrent = addingNode;
                newNodeHead = addingNode;
            }
            currentL2 = currentL2.next;

                newNodeCurrent = addingNode;
        }else{
            let addingNode = new ListNodeMergeKList(currentL1.val);
            if(newNodeHead){
                newNodeCurrent.next = addingNode;
            }else{
                newNodeCurrent = addingNode;
                newNodeHead = addingNode;
            }
            currentL1 = currentL1.next;

                newNodeCurrent = addingNode;
        }
    }

    if(currentL1 && !currentL2){
        if(newNodeHead){
                newNodeCurrent.next = currentL1;
            }else{
                newNodeCurrent = currentL1;
                newNodeHead = currentL1;
            } 
    }

    if(!currentL1 && currentL2){
        if(newNodeHead){
                newNodeCurrent.next = currentL2;
            }else{
                newNodeCurrent = currentL2;
                newNodeHead = currentL2;
            }
    }

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

let resultMergeKList = mergeKLists(new Array<ListNodeMergeKList>(l1test.head, l2test.head, l3test.head));
console.log(resultMergeKList);