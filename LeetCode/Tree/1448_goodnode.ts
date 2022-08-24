
/*
  Definition for a binary tree node.
  class TreeNode1448GoodNode {
      val: number
      left: TreeNode1448GoodNode | null
      right: TreeNode1448GoodNode | null
      constructor(val?: number, left?: TreeNode1448GoodNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
*/

 class TreeNode1448GoodNode {
      val: number
      left: TreeNode1448GoodNode | null
      right: TreeNode1448GoodNode | null
      constructor(val?: number, left?: TreeNode1448GoodNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 
class ContainerTreeNode1448GoodNode{
    head: TreeNode1448GoodNode
    constructor(){};
}

function goodNodes(root: TreeNode1448GoodNode | null): number {
    let currentCount = 0; 
    let currentMax = Number.NEGATIVE_INFINITY;
    let result = goodNodeRecursive(root, currentMax, currentCount);
    return result;
};

function goodNodeRecursive(currentNode: TreeNode1448GoodNode, currentMax: number, currentCount: number): number{
    if(!currentNode){
        return currentCount;
    }
    
    if(currentMax <= currentNode.val){
        currentMax = currentNode.val;
        currentCount++;
    }

    currentCount = goodNodeRecursive(currentNode.left, currentMax, currentCount);
    currentCount = goodNodeRecursive(currentNode.right, currentMax, currentCount);
    return currentCount;
}

let testContainer1448 = new ContainerTreeNode1448GoodNode();
//let testNode1448 = new TreeNode1448GoodNode(3);
//testContainer1448.head = testNode1448;
//testNode1448 = new TreeNode1448GoodNode(1);
//testContainer1448.head.left = testNode1448;
//testNode1448 = new TreeNode1448GoodNode(3)
//testContainer1448.head.left.left = testNode1448;
//testNode1448 = new TreeNode1448GoodNode(4);
//testContainer1448.head.right = testNode1448;
//testNode1448 = new TreeNode1448GoodNode(1);
//testContainer1448.head.right.left = testNode1448;
//testNode1448 = new TreeNode1448GoodNode(5);
//testContainer1448.head.right.right = testNode1448;


//let testNode1448 = new TreeNode1448GoodNode(3);
//testContainer1448.head = testNode1448;
//testNode1448 = new TreeNode1448GoodNode(3);
//testContainer1448.head.left = testNode1448;
//testNode1448 = new TreeNode1448GoodNode(4);
//testContainer1448.head.left.left = testNode1448
//testNode1448 = new TreeNode1448GoodNode(2);
//testContainer1448.head.left.right = testNode1448;


let testNode1448 = new TreeNode1448GoodNode(-1);
testContainer1448.head = testNode1448;
testNode1448 = new TreeNode1448GoodNode(5);
testContainer1448.head.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-2);
testContainer1448.head.right = testNode1448;
testNode1448 = new TreeNode1448GoodNode(4);
testContainer1448.head.left.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(4);
testContainer1448.head.left.right = testNode1448;
testNode1448 = new TreeNode1448GoodNode(2);
testContainer1448.head.right.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-2);
testContainer1448.head.right.right = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-4);
testContainer1448.head.left.right.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-2);
testContainer1448.head.right.left.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(3);
testContainer1448.head.right.left.right = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-2);
testContainer1448.head.right.right.right = testNode1448;
testNode1448 = new TreeNode1448GoodNode(0);
testContainer1448.head.left.right.left.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-1);
testContainer1448.head.right.left.left.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-3);
testContainer1448.head.right.left.right.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-4);
testContainer1448.head.right.right.right.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-3);
testContainer1448.head.right.right.right.right = testNode1448;
testNode1448 = new TreeNode1448GoodNode(3);
testContainer1448.head.left.right.left.left.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(3);
testContainer1448.head.right.right.right.right.left = testNode1448;
testNode1448 = new TreeNode1448GoodNode(-3);
testContainer1448.head.right.right.right.right.right = testNode1448;
let goodnode1448Result = goodNodes(testContainer1448.head);
console.log(goodnode1448Result);


//Runtime: 196 ms, faster than 68.42% of TypeScript online submissions for Count Good Nodes in Binary Tree.
//Memory Usage: 78.3 MB, less than 57.89% of TypeScript online submissions for Count Good Nodes in Binary Tree.