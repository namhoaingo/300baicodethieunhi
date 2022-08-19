//https://leetcode.com/problems/invert-binary-tree/
/**
 * 
 * Definition for a binary tree node.*/
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      parent: TreeNode| null
      height: number = 0
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
          
      }            

      updateHeight(){
          this.height = Math.max(this.left ? this.left.height: -1, 
                                this.right ? this.right.height : -1) + 1; 
      }

      isBalance(){
        let leftHeight = this.left ? this.left.height : -1;
        let rightHeight = this.right ? this.right.height : -1;
        if(leftHeight - rightHeight == 2 ||
            rightHeight - leftHeight == 2){
            return false;
        }
        else{
            return true;
        }
      }
      
      isLeftHeavy(){
        return (this.left ? this.left.height : -1) > (this.right ? this.right.height: -1);
      }

      isRightHeavy(){
        return (this.left ? this.left.height : -1) < (this.right ? this.right.height : -1);
      }
  }
 

function invertTree(root: TreeNode | null): TreeNode | null {
    return null;
};


class ContainerTreeNode{
    head: TreeNode;

    constructor(){}

    insert(val: number, treeNode: TreeNode): TreeNode{     
        if(!this.head){
            this.head = new TreeNode(val);
            return this.head;
        }           
        else
        {
            if(val <= treeNode.val){
                if(treeNode.left){
                    return this.insert(val, treeNode.left);
                }
                else{
                    let newNode = new TreeNode(val);
                    treeNode.left = newNode;
                    newNode.parent = treeNode;
                    return newNode;
                }
            }
            else{
                if(treeNode.right){
                    return this.insert(val, treeNode.right);
                }else{
                    let newNode = new TreeNode(val);
                    treeNode.right = newNode;
                    newNode.parent = treeNode;
                    return newNode;
                }
            }            
        }
    }

    rebalance(treeNode: TreeNode){
        // establish something 
        let currentNode = treeNode;
        if(currentNode){
            
            let heightLeft = currentNode.left ? currentNode.left.height : -1;
            let heightRight = currentNode.right ? currentNode.right.height : -1;
            if(treeNode.isBalance())
            {
                currentNode.updateHeight(); 
                this.rebalance(currentNode.parent);
            }
            else{
                // rotation
                if(currentNode.isLeftHeavy()){                    
                    if(currentNode.left.isLeftHeavy()){
                        let left = currentNode.left;
                        let leftleft = currentNode.left.left;
                        // single rotation right
                        left.parent = currentNode.parent;
                        left.right = currentNode;
                        currentNode.parent = left;
                    }
                    else{
                        // double rotation
                        let left = currentNode.left;
                        let leftRight = currentNode.left.right;
                        // first rotate
                        currentNode.left = leftRight;
                        leftRight.parent = currentNode;
                        leftRight.left = left;
                        left.parent = leftRight;

                        // second rotate
                        leftRight.parent = currentNode.parent;
                        leftRight.right = currentNode;
                        currentNode.parent = leftRight;
                    }                    
                }else{
                    if(currentNode.right.isRightHeavy()){
                        let right = currentNode.right;
                        let rightright = currentNode.right.right;
                        // single rotation left
                        right.parent = currentNode.parent;
                        right.left = currentNode;
                        currentNode.parent = right
                    }
                    else{
                        // double rotation 
                        let right = currentNode.right;
                        let rightleft = currentNode.right.left;
                        // First rotate
                        currentNode.right = rightleft;
                        rightleft.parent = currentNode;
                        rightleft.right = right;
                        right.parent = rightleft;
                        // second rotation 
                        rightleft.parent = currentNode.parent;
                        rightleft.right = currentNode;
                        currentNode.parent = rightleft;
                    }
                }
            currentNode.updateHeight();
            this.rebalance(currentNode.parent);    
            }
        }
    }
}


let testContainerTreeNode = new ContainerTreeNode();
var insertedNode = testContainerTreeNode.insert(1, testContainerTreeNode.head);
// rebalance
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(2, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
insertedNode = testContainerTreeNode.insert(3, testContainerTreeNode.head);
testContainerTreeNode.rebalance(insertedNode);
console.log(testContainerTreeNode);