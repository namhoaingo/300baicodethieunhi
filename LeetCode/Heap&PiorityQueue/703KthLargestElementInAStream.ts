//https://leetcode.com/problems/kth-largest-element-in-a-stream/

class KthLargest {
    constructor(k: number, nums: number[]) {
    }


    add(val: number): number{
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


var obj =new KthLargest(3, [4,5,8,2]);
let resultFrom703 = obj.add(3); //2,3,4,5,8
console.log(resultFrom703); //2
resultFrom703 = obj.add(5); // 2,3,4,5,5,8
console.log(resultFrom703);
resultFrom703 = obj.add(10);
console.log(resultFrom703);
resultFrom703 = obj.add(9);
console.log(resultFrom703);
resultFrom703 = obj.add(4);
console.log(resultFrom703);