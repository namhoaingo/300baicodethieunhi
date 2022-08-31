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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(root == null){
        return null;
    }

    if(root == p || root == q){
        return root;
    }

    let leftAns = lowestCommonAncestor(root.left, p, q);
    let rightAns = lowestCommonAncestor(root.right, p, q);

    if(leftAns == rightAns){
        return leftAns;
    }

    if(leftAns != null && rightAns == null){
        return leftAns
    }

    if(leftAns == null && rightAns != null){
        return rightAns;
    }

    return root;
}

// I look at the solution, cannot solve this 