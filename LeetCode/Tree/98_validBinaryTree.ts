
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

function isValidBST_normal(root: TreeNode | null): boolean {
    // Go through every tree node, loop and check from top again  
    let uniqueDict = {};
    return isValidRecursive(root, root, uniqueDict)

}
function isValidRecursive(currentNode: TreeNode, root: TreeNode, uniqueDict: Object){    
    if(!currentNode){
            return true;
    }
    let isCurrentNodeGood = isGoodNode(currentNode, root, uniqueDict);
    return isCurrentNodeGood && isValidRecursive(currentNode.right, root, uniqueDict) && isValidRecursive(currentNode.left, root, uniqueDict);
}

function isGoodNode(currentNode: TreeNode, rootNode: TreeNode, uniqueDict: Object): boolean{
    
    if(!currentNode){        
        return true;
    }
    else if(!rootNode){
        // if rootNode does not have value
        // and currentNode has value
        return false;
    }
    else{
        if(uniqueDict[currentNode.val] != undefined){
            return false;
        }
        if(currentNode.val == rootNode.val)
        {
            uniqueDict[currentNode.val] = 1;
            return true;
        }
    
        if(currentNode.val < rootNode.val){
            return isGoodNode(currentNode, rootNode.left, uniqueDict)
        }
        if(currentNode.val > rootNode.val){
            return isGoodNode(currentNode, rootNode.right, uniqueDict)
        }
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

//Runtime: 149 ms, faster than 15.38% of TypeScript online submissions for Validate Binary Search Tree.
//Memory Usage: 48.6 MB, less than 11.08% of TypeScript online submissions for Validate Binary Search Tree.