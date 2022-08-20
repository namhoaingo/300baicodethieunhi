
//https://leetcode.com/problems/diameter-of-binary-tree/
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

function diameterOfBinaryTree(root: TreeNode | null): number {
   let maxDia = 0;
   return findCurrentMaxWidthAndMaxHeight(root, maxDia)[0];
};


function findCurrentMaxWidthAndMaxHeight(treeNode: TreeNode, currentMax: number){
    if(!treeNode){
        return [-1, -1];
        // width + height
    }
    else{
        let currentWidth_Height_Left = findCurrentMaxWidthAndMaxHeight(treeNode.left, currentMax);
        let currentWidth_Height_Right = findCurrentMaxWidthAndMaxHeight(treeNode.right, currentMax);
        let currentWidth = currentWidth_Height_Left[1] + currentWidth_Height_Right[1] + 2;
        let currentMaxheight =   Math.max(currentWidth_Height_Left[1] + 1, currentWidth_Height_Right[1] + 1)
        return [
            Math.max(currentWidth_Height_Left[0], currentWidth_Height_Right[0], currentWidth)
            ,
            currentMaxheight           
            ];
    }
}
//Runtime: 104 ms, faster than 73.02% of TypeScript online submissions for Diameter of Binary Tree.
//Memory Usage: 47.5 MB, less than 19.78% of TypeScript online submissions for Diameter of Binary Tree.