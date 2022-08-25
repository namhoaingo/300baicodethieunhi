
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

function isValidBST(root: TreeNode | null): boolean {
    // Go through every tree node, loop and check from top again
    let uniqueDict = {}; 
    let isRootGood = isGoodNode(root, root, uniqueDict);
    return isRootGood && isGoodNode(root.right, root, uniqueDict) && isGoodNode(root.left, root, uniqueDict);
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

        5
       / \
      4    10
          / \
         7   11



                32
              /    \  
            26      47
           /          \
         19            56
           \
           27               