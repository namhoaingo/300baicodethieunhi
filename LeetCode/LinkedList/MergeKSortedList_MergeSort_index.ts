//https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 */
 
 class LIstNodeMergeKList_Use_Index {
      val: number
      next: LIstNodeMergeKList_Use_Index | null
      constructor(val?: number, next?: LIstNodeMergeKList_Use_Index | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 
class ContainerLIstNodeMergeKList_Use_Index{
    head: LIstNodeMergeKList_Use_Index;
    constructor(){};

    add(val: number){
        let newNode = new LIstNodeMergeKList_Use_Index(val);
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

function mergeKLists_useIndex(lists: Array<LIstNodeMergeKList_Use_Index | null>): LIstNodeMergeKList_Use_Index | null {
    return mergeSort_linkedList_index(0, lists.length-1, lists);
};

function mergeSort_linkedList_index(startIndex:number, endIndex: number, lists: Array<LIstNodeMergeKList_Use_Index | null>): LIstNodeMergeKList_Use_Index{
    if(startIndex == endIndex){
        return lists[startIndex];
    }
    else if(lists.length == 0){
        return null;
    }

    let mid = Math.floor((startIndex + endIndex)/2);
    let leftHeadNode = mergeSort_linkedList_index(startIndex, mid, lists);
    let rightHeadNode = mergeSort_linkedList_index(mid+1, endIndex, lists);
    let result = merge_linkedList_index(leftHeadNode, rightHeadNode);
    return result;
}

function merge_linkedList_index(l1: LIstNodeMergeKList_Use_Index, l2: LIstNodeMergeKList_Use_Index): LIstNodeMergeKList_Use_Index{
    // sort 2 cai list
    let newNodeCurrent = null;
    let newNodeHead = null;
    let currentL1 = l1;
    let currentL2 = l2;
    while(currentL1 && currentL2){
        if(currentL1.val > currentL2.val){
            let addingNode = new LIstNodeMergeKList_Use_Index(currentL2.val);
            if(newNodeHead){
                newNodeCurrent.next = addingNode;
            }else{
                newNodeCurrent = addingNode;
                newNodeHead = addingNode;
            }
            currentL2 = currentL2.next;

                newNodeCurrent = addingNode;
        }else{
            let addingNode = new LIstNodeMergeKList_Use_Index(currentL1.val);
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
let l1test_index = new ContainerLIstNodeMergeKList_Use_Index();
l1test_index.add(1);
l1test_index.add(4);
l1test_index.add(5);

let l2test_index = new ContainerLIstNodeMergeKList_Use_Index();
l2test_index.add(1);
l2test_index.add(3);
l2test_index.add(4);

let l3test = new ContainerLIstNodeMergeKList_Use_Index();
l3test.add(2);
l3test.add(6);

let resultMergeKList_index = mergeKLists_useIndex(new Array<LIstNodeMergeKList_Use_Index>(l1test_index.head, l2test_index.head, l3test.head));
console.log(resultMergeKList_index);
