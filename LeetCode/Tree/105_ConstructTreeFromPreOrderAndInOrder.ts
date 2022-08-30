//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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

function buildTree105(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length == 0 || inorder.length == 0){
        return null;
    }

    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);

    root.left = buildTree105(preorder.slice(1, mid+1), inorder.slice(undefined, mid));
    root.right = buildTree105(preorder.slice(mid+1), inorder.slice(mid+1));
    return root;
};


//Runtime: 239 ms, faster than 31.33% of TypeScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
//Memory Usage: 138.7 MB, less than 14.29% of TypeScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.