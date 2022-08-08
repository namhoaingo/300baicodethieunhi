// Tao thâý câu này khó vãi lồn ra ý. Nhưng mình cũng nên làm nó, thay vì làm câu khác

// Sort theo position hay theo speed day 
function carFleet(target: number, position: number[], speed: number[]): number {
    // first create car array
    var cars = new Array<SingleCar>();
    for(var i = 0; i < position.length - 1; i++){
        var car = new SingleCar(speed[i], position[i], target);
        cars.push(car);
    }

    // Sort cars
    sortCarByLocation(cars);
    
    var carStack = new GenericStackCarFleet<SingleCar>();
    for(var i = cars.length - 1; i >= 0; i--){
        if(carStack.size() == 0){
            carStack.push(cars[i]);
        }
        else{
            if(cars[i].getTime() > carStack.peek().getTime()){
                carStack.push(cars[i]);
            }
        }
    }
    
    return carStack.size();
};


class GenericStackCarFleet<T>{
    private _head: StackNodeCarFleet<T>;
    private _size: number;
    private _tail: StackNodeCarFleet<T>;


    constructor(){
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    head(): StackNodeCarFleet<T>{
        return this._head;
    }

    empty(): void{
        this._head = null;
        this._tail = null;
        this._size = 0;
    }
    size(): number{
        return this._size;
    }
    pop(): void{
        if(this._size <= 1){
            this._head = null;
            this._tail = null; 
            this._size = 0;
        }
        else{
            var temp = this._head;
            this._head = temp.getRight();
            temp.setRight(null);
            this._size--;
        }
    }

    push(value: T): void{
        var newNode = new StackNodeCarFleet(value);
        if(this._size == 0){
            this._head = newNode;
            this._tail = newNode;
        }
        else{
            var temp = this._head;
            this._head = newNode;
            newNode.setRight(temp);
            temp.setLeft(this._head);
        }
        this._size++;
    }

    peek(): T{
        return this._head.value();
    }

    result(): number[]{
        var answer = new Array();
        var curentNode = this._head;
        while(curentNode != null){
            answer.push(curentNode.value());
            curentNode = curentNode.getRight();
        }
        return answer;
    }

}

class StackNodeCarFleet<T>{
    private _value: T;
    private _rightNode: StackNodeCarFleet<T>;
    private _leftNode: StackNodeCarFleet<T>;
    
    constructor(value: T){
        this._value = value;
    }    

    value(): T{
        return this._value;
    }

    getRight(): StackNodeCarFleet<T>{
        return this._rightNode;
    }

    setRight(stackNode: StackNodeCarFleet<T>){
        this._rightNode = stackNode;
    }

    getLeft(): StackNodeCarFleet<T>{
        return this._leftNode;
    }
    
    setLeft(stackNode: StackNodeCarFleet<T>){
        this._leftNode = stackNode;
    }
}



class SingleCar{
    private _speed: number;
    private _location: number;
    private _time: number;

    constructor(speed: number, location: number, target: number){
        this._speed = speed;
        this._location = location;
        this._time = (target - this._location) / this._speed;
    }

    getTime(): number{
        return this._time;
    }
    getSpeed(): number{
        return this._speed;
    }

    getLocation(): number{
        return this._location;
    }

    toString(): string{
        return "position: " + this._location + " speed: " + this._speed;
    }
}

function sortCarByLocation(cars: SingleCar[]){
    // Use Heap sort
    heapSort_carFleet(cars);
}

function heapSort_carFleet(cars: SingleCar[]): SingleCar[]{
    // create the first max heap 
    for(var i = cars.length - 1; i >= 0; i--){
        heapify_carfleet(cars, i, cars.length-1);
    }
    for(var i = 0; i < cars.length - 1; i++){
        // swap 
        swap_heap_carfleet(cars, 0, cars.length - i - 1);
        heapify_carfleet(cars, 0, cars.length - i - 2)
    }
    return cars;
}

function heapify_carfleet(cars: SingleCar[], currentIndex: number, rightIndex: number){
       while (true) {
        var leftChildIndex = currentIndex * 2 + 1;
        var rightChildIndex = currentIndex * 2 + 2;
        if(leftChildIndex <= rightIndex && rightChildIndex <= rightIndex){
            // Compare the max to see if we need to swap 
            if(cars[currentIndex].getLocation() >= Math.max(cars[leftChildIndex].getLocation(), cars[rightChildIndex].getLocation())){
                break;
            }
            else if(cars[leftChildIndex].getLocation() > cars[rightChildIndex].getLocation()){
                swap_heap_carfleet(cars, currentIndex, leftChildIndex );
                currentIndex = leftChildIndex;
            }
            else{
                swap_heap_carfleet(cars, currentIndex, rightChildIndex);
                currentIndex = rightChildIndex;
            }
        }
        else if (leftChildIndex <= rightIndex){
            if(cars[currentIndex].getLocation() < cars[leftChildIndex].getLocation()){
                swap_heap_carfleet(cars, currentIndex, leftChildIndex);
                currentIndex = leftChildIndex;
            } else{
                break;
            }
        } else if (rightChildIndex <= rightIndex){
            if(cars[currentIndex].getLocation() < cars[rightChildIndex].getLocation()){
                swap_heap_carfleet(cars, currentIndex, rightChildIndex);
                currentIndex = rightChildIndex;
            }
            else{
                break;
            }
        } else{
            // case when leftChildIndex and rightChildIndex are both bigger than the right index
            break;
        }
    }    
}

function swap_heap_carfleet(cars: SingleCar[], a_index: number, b_index: number){
    var temp = cars[a_index];
    cars[a_index] = cars[b_index];
    cars[b_index] = temp;
}

//console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));