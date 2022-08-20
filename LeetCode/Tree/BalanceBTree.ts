//https://leetcode.com/problems/balanced-binary-tree/
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

function isBalanced(root: TreeNode | null): boolean {
    let resultFinal = getHeight(root);
    return resultFinal.isBalanceNode;
};

function getHeight(treeNode: TreeNode): Result{
    if(!treeNode){
        return new Result(true, -1);
        // isBalance _ height
    }
    else{
        let leftHeight = getHeight(treeNode.left);
        let rightHeight = getHeight(treeNode.right);
        let height = Math.max(leftHeight.height + 1, rightHeight.height + 1);
        let isBalance = isBalanceSingleNodeCheck(leftHeight.height, rightHeight.height);
        if(leftHeight.isBalanceNode == true && rightHeight.isBalanceNode == true && isBalance== true){
            return new Result(true, height)
        }
        else{
            return new Result(false, height);
        }
    }
}

function isBalanceSingleNodeCheck(leftHeight: number, rightHeight: number): boolean{
    if(leftHeight > rightHeight){
        return !(leftHeight - rightHeight > 1)
    }
    else{
        return !(rightHeight - leftHeight > 1)
    }
}

class Result{
    isBalanceNode: boolean
    height: number

    constructor(_isBalance: boolean, _height: number){
        this.isBalanceNode = _isBalance
        this.height = _height
    }
}
//Runtime: 140 ms, faster than 30.05% of TypeScript online submissions for Balanced Binary Tree.
//Memory Usage: 49.6 MB, less than 18.78% of TypeScript online submissions for Balanced Binary Tree.