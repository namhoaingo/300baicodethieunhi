//https://leetcode.com/problems/invert-binary-tree/
/**
 * 
 * Definition for a binary tree node.*/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    parent: TreeNode | null
    height: number = 0
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)

    }

    updateHeight() {
        this.height = Math.max(this.left ? this.left.height : -1,
            this.right ? this.right.height : -1) + 1;
    }

    isBalance() {
        let leftHeight = this.left ? this.left.height : -1;
        let rightHeight = this.right ? this.right.height : -1;
        if (leftHeight - rightHeight == 2 ||
            rightHeight - leftHeight == 2) {
            return false;
        }
        else {
            return true;
        }
    }

    isLeftHeavy() {
        return (this.left ? this.left.height : -1) > (this.right ? this.right.height : -1);
    }

    isRightHeavy() {
        return (this.right ? this.right.height : -1) > (this.left ? this.left.height : -1);
    }
}


function invertTree(root: TreeNode | null): TreeNode | null {
    return null;
};


class ContainerTreeNode {
    head: TreeNode;

    constructor() { }

    insert(val: number, treeNode: TreeNode): TreeNode {
        if (!this.head) {
            this.head = new TreeNode(val);
            return this.head;
        }
        else {
            if (val <= treeNode.val) {
                if (treeNode.left) {
                    return this.insert(val, treeNode.left);
                }
                else {
                    let newNode = new TreeNode(val);
                    treeNode.left = newNode;
                    newNode.parent = treeNode;
                    return newNode;
                }
            }
            else {
                if (treeNode.right) {
                    return this.insert(val, treeNode.right);
                } else {
                    let newNode = new TreeNode(val);
                    treeNode.right = newNode;
                    newNode.parent = treeNode;
                    return newNode;
                }
            }
        }
    }

    rebalance(treeNode: TreeNode) {
        // establish something 
        let currentNode = treeNode;
        if (currentNode) {

            let heightLeft = currentNode.left ? currentNode.left.height : -1;
            let heightRight = currentNode.right ? currentNode.right.height : -1;
            if (treeNode.isBalance()) {
                currentNode.updateHeight();
                this.rebalance(currentNode.parent);
            }
            else {
                // rotation
                if (currentNode.isLeftHeavy()) {
                    if (currentNode.left.isLeftHeavy()) {
                        let left = currentNode.left;
                        // single rotation right
                        if(currentNode.parent){
                            left.parent = currentNode.parent;
                            currentNode.parent.left = left;
                        }
                        else{
                            left.parent = currentNode.parent;
                            this.head = left;
                        }
                        let tempLeftRight = left.right;
                        currentNode.left = tempLeftRight;
                        if(tempLeftRight){
                            tempLeftRight.parent = currentNode
                        }

                        left.right = currentNode;
                        currentNode.parent = left;
                    }
                    else {
                           // double rotation 
                        let left = currentNode.left;
                        let leftright = currentNode.left.right;
                        let leftrightright = leftright.right;
                        let leftrightleft = leftright.left;
                        
                        currentNode.left = leftright;
                        leftright.left = left;
                        leftright.right = currentNode;
                        leftright.parent = currentNode.parent;
                        if(currentNode.parent){
                            currentNode.parent.left = leftright;
                        }else{
                            this.head = leftright;
                        }
                        if(leftrightright){
                            currentNode.right = leftrightright;
                            leftrightright.parent = currentNode
                        }else{
                            currentNode.right = leftrightright;
                        }
                        if(leftrightleft){                            
                            left.right = leftrightleft;
                            leftrightleft.parent = currentNode
                        }else{
                            left.right = leftrightleft
                        }
                    }
                } else {
                    if (currentNode.right.isRightHeavy()) {
                        let right = currentNode.right;
                        // single rotation left
                        if(currentNode.parent)
                        {
                            right.parent = currentNode.parent;
                            currentNode.parent.right = right;
                        }
                        else{

                            right.parent = currentNode.parent;
                            this.head = right;
                        }
                        let tempRightLeft = right.left;                        
                        currentNode.right = tempRightLeft;
                        
                        if(tempRightLeft){                            
                            tempRightLeft.parent = currentNode; 
                        }

                        right.left = currentNode;
                        currentNode.parent = right;
                    }
                    else {
                            // double rotation 
                        let right = currentNode.right;
                        let rightleft = currentNode.right.left;
                        let rightleftleft = rightleft.left;
                        let rightleftright = rightleft.right;
                        
                        currentNode.right = rightleft;
                        rightleft.right = right;
                        rightleft.left = currentNode;
                        rightleft.parent = currentNode.parent;
                        if(currentNode.parent){
                            currentNode.parent.right = rightleft;
                        }else{
                            this.head = rightleft;
                        }
                        if(rightleftleft){
                            currentNode.right = rightleftleft;
                            rightleftleft.parent = currentNode
                        }else{
                            currentNode.right = rightleftleft;
                        }
                        if(rightleftright){                            
                            right.left = rightleftright;
                            rightleftright.parent = currentNode
                        }else{
                            right.left = rightleftright
                        }
                    }
                }
            currentNode.updateHeight();
            this.rebalance(currentNode.parent);
            }
        }
    }
}


let testContainerTreeNode = new ContainerTreeNode();
var insertedNode = testContainerTreeNode.insert(9, testContainerTreeNode.head);
// rebalance
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(7, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(6, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(4, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(3, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(2, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(1, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
console.log(testContainerTreeNode);