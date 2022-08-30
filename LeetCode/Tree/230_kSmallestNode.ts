//https://leetcode.com/problems/kth-smallest-element-in-a-bst/
/**
 * 
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest_normal(root: TreeNode | null, k: number): number {

    // in prder traversal and count. Then return
    let resultArray = new Array<number>();
    inOrderTraversalStopAtK(root, resultArray);

    return resultArray[k-1];
};

// return k at the current position
function inOrderTraversalStopAtK(currentNode: TreeNode, resultArray: number[]){

    if(currentNode == null){
        return;
    }

    inOrderTraversalStopAtK(currentNode.left, resultArray);
    //add to the array
    resultArray.push(currentNode.val);

    inOrderTraversalStopAtK(currentNode.right, resultArray);

}
//Runtime: 83 ms, faster than 96.37% of TypeScript online submissions for Kth Smallest Element in a BST.
//Memory Usage: 49.2 MB, less than 52.42% of TypeScript online submissions for Kth Smallest Element in a BST.