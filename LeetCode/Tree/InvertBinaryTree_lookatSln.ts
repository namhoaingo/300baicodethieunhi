//https://leetcode.com/problems/invert-binary-tree/submissions/
/**
// * Definition for a binary tree node.
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

function invertTreeLookAtSln(root: TreeNode | null): TreeNode | null {
    if(!root){
        return null;
    }
    let tmp = root.left
    root.left = root.right;
    root.right = tmp;
    invertTreeLookAtSln(root.left);
    invertTreeLookAtSln(root.right);
    return root;
};

//Runtime: 65 ms, faster than 97.98% of TypeScript online submissions for Invert Binary Tree.
//Memory Usage: 44.9 MB, less than 34.32% of TypeScript online submissions for Invert Binary Tree.