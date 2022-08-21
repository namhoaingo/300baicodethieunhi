//https://leetcode.com/problems/subtree-of-another-tree/
/**
 * Definition for a binary tree node.
 * class TreeNodeSubTree {
 *     val: number
 *     left: TreeNodeSubTree | null
 *     right: TreeNodeSubTree | null
 *     constructor(val?: number, left?: TreeNodeSubTree | null, right?: TreeNodeSubTree | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(isSameTree(root,subRoot)){
        return true;
    }
    else{
        return isSameTree(root.left, subRoot) || isSameTree(root.right, subRoot);
    }
};


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p == null && q==null){
        return true;
    }else if ((q == null && p != null) || (q !=null && p == null)) {
        return false;
    }
    else{
        let rightSameTree = isSameTree(p.right, q.right);
        let leftSameTree = isSameTree(p.left, q.left);
        if(rightSameTree && leftSameTree && p.val == q.val){
            return true;
        }
        else
        {
            return false;
        }
    }
};

 