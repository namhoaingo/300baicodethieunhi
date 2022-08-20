//https://leetcode.com/problems/same-tree/

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p == null && q==null){
        return true;
    }
    else{
        let rightSameTree = isSameTree(p.right, q.right);
        let leftSameTree = isSameTree(p.left, q.left);
        if(rightSameTree && leftSameTree && q.val == q.val){
            return true;
        }
        else
        {
            return false;
        }
    }
};
//Runtime: 109 ms, faster than 31.85% of TypeScript online submissions for Same Tree.
//Memory Usage: 44.2 MB, less than 84.34% of TypeScript online submissions for Same Tree.