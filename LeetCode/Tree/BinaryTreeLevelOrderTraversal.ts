//https://leetcode.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * class TreeNodeLevelTravel102LevelTravel {
 *     val: number
 *     left: TreeNodeLevelTravel102LevelTravel | null
 *     right: TreeNodeLevelTravel102LevelTravel | null
 *     constructor(val?: number, left?: TreeNodeLevelTravel102LevelTravel | null, right?: TreeNodeLevelTravel102LevelTravel | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

  class TreeNodeLevelTravel102LevelTravel {
      val: number
      left: TreeNodeLevelTravel102LevelTravel | null
      right: TreeNodeLevelTravel102LevelTravel | null
      constructor(val?: number, left?: TreeNodeLevelTravel102LevelTravel | null, right?: TreeNodeLevelTravel102LevelTravel | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
 }
 
 class ContainerTreeNodeLevelTravel102LevelTravel{
    head: TreeNodeLevelTravel102LevelTravel;
    constructor(){}
 }


function levelOrder(root: TreeNodeLevelTravel102LevelTravel | null): number[][] {
    let nodeArray = new Array<TreeNodeLevelTravel102LevelTravel>();
    let result = new Array<Array<number>>();
    if(!root){
        return result;
    }
    nodeArray.push(root);

    while(true){
        let newArrayBreadth = printReversive(nodeArray, result);
        if(newArrayBreadth.length == 0){
            break;
        }
        else{
            nodeArray = newArrayBreadth;
        }
    }

    return result;
};


function printReversive(arrayBreadth: TreeNodeLevelTravel102LevelTravel[], result: Array<Array<number>>): TreeNodeLevelTravel102LevelTravel[]{
    let newArrayBreath = new Array<TreeNodeLevelTravel102LevelTravel>();
    let newResult = new Array();    
    arrayBreadth.forEach(ele =>{
        newResult.push(ele.val);
        if(ele.left){
            newArrayBreath.push(ele.left);
        }
        if(ele.right){
            newArrayBreath.push(ele.right);
        }
    })

    result.push(newResult);
    return newArrayBreath;
}

let testContaner102 = new ContainerTreeNodeLevelTravel102LevelTravel();
let testNode102 = new TreeNodeLevelTravel102LevelTravel(3);
testContaner102.head = testNode102;
testNode102 = new TreeNodeLevelTravel102LevelTravel(9);
testContaner102.head.left = testNode102;
testNode102 = new TreeNodeLevelTravel102LevelTravel(20);
testContaner102.head.right = testNode102;
testNode102 = new TreeNodeLevelTravel102LevelTravel(15);
testContaner102.head.right.left = testNode102;
testNode102 = new TreeNodeLevelTravel102LevelTravel(7);
testContaner102.head.right.right = testNode102;

let test102result = levelOrder(testContaner102.head);
console.log(test102result);

//`Runtime: 121 ms, faster than 33.12% of TypeScript online submissions for Binary Tree Level Order Traversal.
//Memory Usage: 45.6 MB, less than 16.94% of TypeScript online submissions for Binary Tree Level Order Traversal.`