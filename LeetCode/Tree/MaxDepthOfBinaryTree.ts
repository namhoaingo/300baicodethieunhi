
//https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 1;
    }
    else{
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
};
//Runtime: 106 ms, faster than 62.35% of TypeScript online submissions for Maximum Depth of Binary Tree.
//Memory Usage: 46 MB, less than 89.91% of TypeScript online submissions for Maximum Depth of Binary Tree.