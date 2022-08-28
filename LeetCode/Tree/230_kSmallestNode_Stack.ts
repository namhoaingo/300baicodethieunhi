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

function kthSmallest(root: TreeNode | null, k: number): number {
    // stack 
    let stack = new Array<TreeNode>();

    let currentNode = root;

    while(currentNode!= null){
        stack.push(currentNode);
        currentNode = currentNode.left;
    }

    let countTracker = 0;
    // pop the stack out
    while(stack.length!=0){
        let examingNode = stack.pop();
        countTracker++;
        if(countTracker == k){
            return examingNode.val;
        }
        else{            
            if(examingNode.right){
               let currentNode2 = examingNode.right;
               while(currentNode2 != null){
                    stack.push(currentNode2);
                    currentNode2 = currentNode2.left;
               } 
            }
        }
    }

    return Number.MAX_VALUE;
}

//Runtime: 114 ms, faster than 62.50% of TypeScript online submissions for Kth Smallest Element in a BST.
//Memory Usage: 49.3 MB, less than 47.18% of TypeScript online submissions for Kth Smallest Element in a BST.