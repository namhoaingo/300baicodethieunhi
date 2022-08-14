//https://leetcode.com/problems/lru-cache/

class LRUCache {
    private _capacity: number;
    private _head: LRUCacheNode = null;
    private _tail: LRUCacheNode = null;
    private _dictionary: Object;
    private _currentCapacity: number;

    constructor(capacity: number) {
        this._capacity = capacity;
        this._dictionary = {};
        this._currentCapacity = 0;
    }

    get(key: number): number {
        // move the position on top
        let accessingNode = this._dictionary[key];
        if(!accessingNode){
            return -1; 
        }
        else{
            let currentHead = this._head;
            if(accessingNode != currentHead){
                if(accessingNode == this._tail){
                    this._tail = accessingNode.prev;
                    if(accessingNode.prev){
                        accessingNode.prev.next = null;
                    }                    
                }
                else{
                    accessingNode.prev = accessingNode.next;
                    accessingNode.next.prev = accessingNode.prev;
                }
                // move to the head
                this._head = accessingNode;
                accessingNode.next = currentHead;
                currentHead.prev = accessingNode;
            }
            return accessingNode.val; 
        }
   }

    put(key: number, value: number): void {
        if(!this._dictionary[key]){
            let newNode = new LRUCacheNode(value, key);
            if(!this._head){
                    // empty
                this._head = newNode;
                this._tail = newNode;
                this._dictionary[key] = newNode;
                this._currentCapacity++;
            }else{
                // have to reshuffle a bit. 
                // add a new node
                if(this._currentCapacity < this._capacity)
                {
                    let tempHead = this._head;
                    this._head = newNode;
                    newNode.next = tempHead;
                    tempHead.prev = newNode;
                    this._dictionary[key] = newNode;
                    this._currentCapacity++;
                }
                else{
                    // remove an old one from the bottom

                    let currentTail = this._tail;
                    if(currentTail.prev == null){
                        this._tail = newNode;                    
                    }
                    else{
                        currentTail.prev.next = null;
                        this._tail = currentTail.prev;
                        // add to head

                        let tempHead = this._head;
                        this._head = newNode;
                        newNode.next = tempHead;
                        tempHead.prev = newNode;
                    }
                        delete this._dictionary[currentTail.key];
                        this._dictionary[key] = newNode;            
                    
                }
            }
        }
        else{
            
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
testLRUCache.get(2);
testLRUCache.put(2,6);
testLRUCache.get(1);
testLRUCache.put(1,5);
testLRUCache.put(1,2);
testLRUCache.get(1);
testLRUCache.get(2);


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