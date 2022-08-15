//https://leetcode.com/problems/lru-cache/

class LRUCache {
    private _maxCapacity: number;
    private _head: LRUCacheNode = null;
    private _tail: LRUCacheNode = null;
    private _dictionary: Object;
    private _currentCapacity: number;

    constructor(capacity: number) {
        this._maxCapacity = capacity;
        this._dictionary = {};
        this._currentCapacity = 0;
    }

    get(key: number): number {
        if(this._dictionary[key]){
            let accessingNode = this._dictionary[key];
            // update the position
            this.moveCurrentNodeToTop(accessingNode);
            return accessingNode.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        //add 
        let addingNode = new LRUCacheNode(value, key);
        if(!this._dictionary[key]){
            // add only 
            if(this._currentCapacity < this._maxCapacity){
                
                this.addToHead(addingNode);
                this._dictionary[key] = addingNode;  
            }
            else{
            // remove and add since capacity is reached
                let removingNodeFromTail = this.removeFromTail();
                this.addToHead(addingNode);
                delete this._dictionary[removingNodeFromTail.key];
                this._dictionary[key] = addingNode;
            }
        }else{
            // update
            let updatingNode = this._dictionary[key];
            updatingNode.val = value;

            // update the position in the queue to top
            this.moveCurrentNodeToTop(updatingNode);

        }
    }

    private addToHead(newNode: LRUCacheNode){
        if(this._head){
           let tempHead = this._head;
           this._head = newNode;
           newNode.next = tempHead;
           tempHead.prev = newNode; 
        }
        else{
            this._head = newNode;
            this._tail = newNode;
        }
        this._currentCapacity++;
    }

    private removeFromTail(): LRUCacheNode{
        let tailNode: LRUCacheNode = this._tail;
        if(this._head == this._tail && this._currentCapacity == 1){
            this._head = null;
            this._tail = null;
        }else{
            let tempTailPrev = tailNode.prev;
            tempTailPrev.next = null;
            tailNode.prev = null;
            this._tail = tempTailPrev;            
        }
        this._currentCapacity--;
        return tailNode;
    }

    private removeFromMiddle(removedNode: LRUCacheNode): LRUCacheNode{
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;
        this._currentCapacity--;
        return removedNode;
    }

    private moveCurrentNodeToTop(currentNode: LRUCacheNode){
        // 1. Node already at the top
        if(this._head != currentNode){
            if(this._tail == currentNode){
                // Remove from Tail and add to the top
                let removedTailNode = this.removeFromTail();
                this.addToHead(removedTailNode);
            }
            else{
                // Node in the middle of array
                let removedTailNode = this.removeFromMiddle(currentNode);
                this.addToHead(removedTailNode);
            }
        }
    }
}

class LRUCacheNode{
    val: number;
    key: number;
    next: LRUCacheNode;
    prev: LRUCacheNode;

    constructor(_val: number, _key: number){
        this.val = _val;
        this.key = _key;
        this.next = null;
        this.prev = null;
    }
}

let testLRUCache = new LRUCache(2);
console.log(testLRUCache.get(2));
testLRUCache.put(2,6);
console.log(testLRUCache.get(1));
testLRUCache.put(1,5);
testLRUCache.put(1,2);
console.log(testLRUCache.get(1));
console.log(testLRUCache.get(2));


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


//["LRUCache", "put",   "put",  "get",  "put",  "get",  "put",  "get", "get",  "get"]
//[    [2],   [1, 1],   [2, 2],  [1],   [3, 3],  [2],   [4, 4],  [1],   [3],   [4]]
//Output
//[   null,    null,     null,    1,     null,    -1,    null,    -1,    3,     4]
//Runtime: 869 ms, faster than 81.79% of TypeScript online submissions for LRU Cache.
//Memory Usage: 121.4 MB, less than 84.64% of TypeScript online submissions for LRU Cache.