
//https://leetcode.com/problems/validate-binary-search-tree/
/**
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

function isValidBST(root: TreeNode | null): boolean {
    // Go through every tree node, loop and check from top again  
    return validBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function validBST(currentNode: TreeNode, left: number, right: number): boolean{
    if(!currentNode){
        return true;
    }
    else{
        if (!(currentNode.val > left && currentNode.val < right)){
            return false;
        }

        return validBST(currentNode.left, left, currentNode.val)
            && validBST(currentNode.right, currentNode.val, right);
    }
}

//        5
//       / \
//      4    10
//          / \
//         7   11



//                32
//              /    \  
//            26      47
//           /          \
//         19            56
//           \
//           27               
//Runtime: 124 ms, faster than 42.19% of TypeScript online submissions for Validate Binary Search Tree.
//Memory Usage: 46.8 MB, less than 96.31% of TypeScript online submissions for Validate Binary Search Tree.