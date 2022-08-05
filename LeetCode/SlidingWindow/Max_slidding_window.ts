//https://leetcode.com/problems/sliding-window-maximum/

// Solve this by using a queue
// each move we will 
//1. Take a number out
//2. Add a number in
//1. When take a number out, if it is bigger or equal the biggest. remove the 
// biggest. 
// check the number, remove 
//2. 

/// This is too hard, I will continue later
function maxSlidingWindow(nums: number[], k: number): number[] {

   var doubleQueue = new DoubleEndedQueue();
   var left = 0; 
   var right = 0; 
   for(var right = 0; right < nums.length; right++){
	var numb_right = nums[right];
	var numb_left = nums[left]; 
	//khi bang thi van nen xet	
	if(right - left <= k - 1){
		
		if(doubleQueue.size() == 0){
			doubleQueue.addHead(numb_right);
		}
		else{
			// start comparing 
			if(doubleQueue.max() < numb_right){
				doubleQueue.removeAll();
				doubleQueue.addHead(numb_right);
			}
			else{
				doubleQueue.addTailWithComparision(numb_right);
			}
		}
	}else{
		// remove left truoc
		// only need to remove left neu left lown nhat
		// left khong bao h co trong queue khi left nho hon max dc 
		if(left == doubleQueue.max()){
			// remove first 
			doubleQueue.removeHead();
		} 

		// sau do moi tinh den right	
	}
   }
   return new Array();

};

class DoubleEndedQueue {
	private _headNode: QueueNode;
	private _tailNode: QueueNode;
	private _size: number;

	constructor() {
		this._size = 0;
	}
	
	size():number{
		return this._size;
	}

	max(): number{
		return this._headNode.value();
	}	

	min(): number{
		return this._tailNode.value();
	}
	removeAll(): void{
		this._headNode = null;
		this._tailNode = null;
	}

	// Add Head
	addHead(value: number): void {
		var newHeadNode = new QueueNode(value);
		if(this._size > 0){
			var current = this._headNode;
			this._headNode = newHeadNode;
			this._headNode.setRight(current);
			current.setLeft(newHeadNode);
		}
		else{
		   this._headNode = newHeadNode;
		   this._tailNode = newHeadNode; 
		}
		this._size = this._size + 1;  
	}

	// Remove Head
	removeHead(): QueueNode {
	   if(this._size > 1){
			var currentHead = this._headNode;
			this._headNode = currentHead.getRight();
			this._headNode.setLeft(null);
			currentHead.setRight(null);
			this._size = this._size - 1;
			return currentHead;
		}
		else if(this._size == 1){
		   var currentHead = this._headNode;
		   this._headNode = null;
		   this._tailNode = null;
		   this._size = this._size - 1;
		   return currentHead; 
		}
		else{
			return null;
		}
	}

	// Add Tail . With the add tail, need to put it on the correct spot
	addTailWithComparision(value: number): void{
		// start from the bottm 
		var currentNode = this._tailNode;
		// if new value is smallest
		if(value <= currentNode.value()){
			this.addTail(value);   
		}
		else{
			while(currentNode.value() >= value){
				var newNode = new QueueNode(value);
				var temp = currentNode.getRight();
				currentNode.setRight(newNode);
				newNode.setLeft(currentNode);
				temp.setLeft(newNode);
				newNode.setRight(temp);
				this._size = this._size + 1;
			}    
		}
	}

	private addTail(value: number): void {
		if(this._size > 0){
			var newTailNode = new QueueNode(value);
			var currentTail = this._tailNode;
			this._tailNode = newTailNode;
			currentTail.setRight(newTailNode);
			this._tailNode.setLeft(currentTail);
			this._size = this._size + 1;
		}
		else if(this._size == 0){
			var newTailNode = new QueueNode(value);
			this._tailNode = newTailNode;
			this._headNode = newTailNode;
			this._size = this._size + 1; 
		}
	}

	removeTail(): QueueNode{
		if(this._size == 0){
			return null;
		}
		else if(this._size == 1){
			var currentTail = this._headNode;
			this._headNode = null;
			this._tailNode = null;
			this._size = 0;
			return currentTail;
		}
		else{
			var currentTail = this._tailNode;
			this._tailNode = currentTail.getLeft();
			this._tailNode.setRight(null);
			currentTail.setLeft(null);
			this._size = this._size - 1;
			return currentTail;
		}
	}

	printFromHead(): void{
		console.log("****************************************");
		var currentNode = this._headNode;
		while(currentNode != null){
			console.log(currentNode.value());
			currentNode = currentNode.getRight();
		}
	}

	printFromTail(): void{
		console.log("****************************************");
		var currentNode = this._tailNode;
		while(currentNode != null){
			console.log(currentNode.value());
			currentNode = currentNode.getLeft();
		}
	}
}


class QueueNode{
	private _value: number;
	private _leftNode: QueueNode;
	private _rightNode: QueueNode; 
	
	constructor(value: number){
	   this._value = value; 
	   this._leftNode = null;
	   this._rightNode = null;
	}
	
	getLeft(): QueueNode{
		return this._leftNode;
	} 

	getRight(): QueueNode{
		return this._rightNode;
	}

	setLeft(leftNode: QueueNode): void{
		this._leftNode = leftNode;
	}

	setRight(rightNode: QueueNode): void{
		this._rightNode = rightNode;
	}

	value(): number{
		return this._value;
	}
}
console.log(maxSlidingWindow([1], 2));