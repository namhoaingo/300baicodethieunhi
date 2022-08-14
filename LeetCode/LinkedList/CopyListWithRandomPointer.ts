//https://leetcode.com/problems/copy-list-with-random-pointer/
//Definition for NodeWithRandomAddress.
// Bai nay may chiu thua day 
// vi thuc su la may khong nhin ra van de, kho qua
// doi ca next luoon thi  vl roi
  class NodeWithRandomAddress {
      val: number
      next: NodeWithRandomAddress | null
      random: NodeWithRandomAddress | null
      constructor(val?: number, next?: NodeWithRandomAddress, random?: NodeWithRandomAddress) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
          this.random = (random===undefined ? null : random)
      }
  }

class ContainerNodeWideRandomAddress{
    head: NodeWithRandomAddress | null;
    size: number;
    add(val: number ){
        let newAddingNode = new NodeWithRandomAddress(val);
        if(this.head == null){
            this.head = newAddingNode;
        }
        else{
            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next
            }
            pointer.next = newAddingNode;
        }
        this.size++;
    }

    addRandom(val: number, location: number | null){
        let current = this.head;
        let tempCurrent = null;
        let ramdom = null;
        while(current){
            if(current.val == val){
                tempCurrent = current;
                break;
            }
            current = current.next;
        }

        ramdom = this.head;
        let currentLocation = 0
        if(location != null){
            while(currentLocation != location){
                currentLocation++;
                ramdom = ramdom.next;
            }

            tempCurrent.random = ramdom;
        }
        else{
            tempCurrent.random = null;
        }
    }
}

function copyRandomList(head: NodeWithRandomAddress | null): NodeWithRandomAddress | null {
    // create the second array and update the next link
    let current = head;

    let newLinkHead = null;
    let newLinkCurrent = null;
    while(current){
        let duplNode = new NodeWithRandomAddress(current.val);
        // change the next link of current
        let tempCurrentNext = current ? current.next : null;

        if(!newLinkCurrent){
            newLinkHead = duplNode;
            newLinkCurrent = duplNode;
        }

        current.next = duplNode;
        duplNode.next = tempCurrentNext
        current = current.next.next;
    }

    let currentToSetRandom = head
    // loop through second time to create the random key
    while(currentToSetRandom){
        if(currentToSetRandom.random){
            currentToSetRandom.next.random = currentToSetRandom.random.next;       
        }
        currentToSetRandom = currentToSetRandom.next.next;
    }

    // loop last time to correct the next address
    let currentToSetNext = head;
    while(currentToSetNext){
        let currentMatch = currentToSetNext.next;
        let currentNext = currentToSetNext.next.next;
        
        if(currentNext != null){
            let currentNextMatch = currentToSetNext.next.next.next;
            currentMatch.next = currentNextMatch;
        }

        currentToSetNext.next = currentNext
        currentToSetNext = currentToSetNext.next;
    }

    return newLinkHead;
};


let testContainer = new ContainerNodeWideRandomAddress();
testContainer.add(7);
testContainer.add(13);
testContainer.add(11);
testContainer.add(10);
testContainer.add(1);
testContainer.addRandom(7, null)
testContainer.addRandom(13, 0)
testContainer.addRandom(11,4 )
testContainer.addRandom(10,2 )
testContainer.addRandom(1, 0)

let copyRandomTest = copyRandomList(testContainer.head)

//removing all original head
let currentOrignal = testContainer.head;
while(currentOrignal){
    currentOrignal.val = 0;
    currentOrignal = currentOrignal.next;
}
console.log("Done")

// SHIT THIS IS HARD
//Runtime: 87 ms, faster than 72.89% of TypeScript online submissions for Copy List with Random Pointer.
//Memory Usage: 45 MB, less than 65.06% of TypeScript online submissions for Copy List with Random Pointer.