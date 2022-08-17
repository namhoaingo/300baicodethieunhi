//https://leetcode.com/problems/reverse-nodes-in-k-group/

/**
 * Definition for singly-linked list.
 * class ListNodeReverseKList {
 *     val: number
 *     next: ListNodeReverseKList | null
 *     constructor(val?: number, next?: ListNodeReverseKList | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNodeReverseKList {
    val: number
    next: ListNodeReverseKList | null
    constructor(val?: number, next?: ListNodeReverseKList | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

   
class ContainerListNodeReverseKList{
    head: ListNodeReverseKList;
    constructor(){

    }
    
    add(val: number){
        let newNode = new ListNodeReverseKList(val);
        if(!this.head){
            this.head = newNode;
        }else{
            let addCurrentPointer = this.head;
            while(addCurrentPointer.next){
               addCurrentPointer = addCurrentPointer.next; 
            }
            addCurrentPointer.next = newNode;
        }
    }
}


function reverseKGroup(head: ListNodeReverseKList | null, k: number): ListNodeReverseKList | null {   
    let resultHead = head;
    let firstLoop = true;
    

    let current = head;
    let afterEndNode = head;
    let beforeEndNode = null;
    while(true){
        let currentLoopCount = 0
        while(afterEndNode != null && currentLoopCount < k ) {     
            afterEndNode = afterEndNode.next
            currentLoopCount++;                    
        }
        if(afterEndNode == null && currentLoopCount < k ){
            return resultHead;
        }        
        let [startResult, endResult] = reverseLeftNode(current, afterEndNode);
        
        if(firstLoop){
            resultHead = endResult;
            startResult.next = afterEndNode;
            current = afterEndNode;
            beforeEndNode = startResult;
            firstLoop = !firstLoop;
        }else{
            startResult.next = afterEndNode;
            current = afterEndNode;
            beforeEndNode.next = endResult;
            beforeEndNode = startResult;
        }
    }
    return resultHead;
};

// we will need a next one after endNode to hook up with the new list
function reverseLeftNode(startNode: ListNodeReverseKList, endNodeNotIncluded: ListNodeReverseKList)
{
    var currentPointer = startNode;
    var prev = null; 
    while(currentPointer != endNodeNotIncluded){
        let tempNext = currentPointer.next; 
        currentPointer.next = prev;
        prev = currentPointer;
        currentPointer = tempNext;
    }

    return [startNode,prev];
}



/// Testing 
let testingReverseNodeKGroup = new ContainerListNodeReverseKList();
testingReverseNodeKGroup.add(1)
testingReverseNodeKGroup.add(2)
testingReverseNodeKGroup.add(3)
testingReverseNodeKGroup.add(4)
testingReverseNodeKGroup.add(5)
testingReverseNodeKGroup.add(6)

let resultTestingReverseNodeKGroup = reverseKGroup(testingReverseNodeKGroup.head, 2);

console.log(resultTestingReverseNodeKGroup);
//Runtime: 161 ms, faster than 22.45% of TypeScript online submissions for Reverse Nodes in k-Group.
//Memory Usage: 46.3 MB, less than 82.31% of TypeScript online submissions for Reverse Nodes in k-Group.