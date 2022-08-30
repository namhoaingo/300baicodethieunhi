//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
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

// Create pre oder and in order, combine them into one string with | seperate them

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if(!root){
        return "";
    }
    let inOrderResult = new Array<number>();
    inOrderTraversal297(root,inOrderResult);

    let preOrderResult = new Array<number>();
    preOrderTraversal297(root, preOrderResult);
     
    return inOrderResult.join(",") +"|"+ preOrderResult.join(",");
};

function inOrderTraversal297(root: TreeNode, inorderTraversalArray: Array<number>){
    if(!root){
        return;
    }

    inOrderTraversal297(root.left, inorderTraversalArray);
    inorderTraversalArray.push(root.val);
    inOrderTraversal297(root.right, inorderTraversalArray);
}

//+ab
function preOrderTraversal297(root: TreeNode, preorderTraversalArray: Array<number>){
    if(!root){
        return;
    }

    preorderTraversalArray.push(root.val);
    preOrderTraversal297(root.left, preorderTraversalArray);
    preOrderTraversal297(root.right, preorderTraversalArray);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if(data == ""){
        return null;
    }
    let inOrderArray = Array.from(data.split("|")[0].split(","), Number);
    let preOrderArray = Array.from(data.split("|")[1].split(","), Number);

    return buildTree(preOrderArray, inOrderArray);
};



function buildTree(preorder: Array<number>, inorder: Array<number>): TreeNode | null {
    if (preorder.length == 0 || inorder.length == 0){
        return null;
    }

    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);

    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(undefined, mid));
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1));
    return root;
};

class TreeNodeIndentifier{
    val: number;
    iden: number;

    constructor(value: number, identification: number){
        this.val = value;
        this.iden = identification;
    }
}

class TreeNodeArrayContainer{
    treeNodes: Array<TreeNodeIndentifier>;

    constructor(){

    }

    add(treeNodeIden: TreeNodeIndentifier){
        this.treeNodes.push(treeNodeIden);
    }

    //find()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */