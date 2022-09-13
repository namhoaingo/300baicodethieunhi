
//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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

function lowestCommonAncestor_235(root: TreeNodeLowestCommonAncestor | null
                                , p: TreeNodeLowestCommonAncestor | null
                                , q: TreeNodeLowestCommonAncestor | null)
                                : TreeNodeLowestCommonAncestor | null {
	let bigger: TreeNodeLowestCommonAncestor;
    let smaller: TreeNodeLowestCommonAncestor;
    if(p.val > q.val){
        bigger = p;
        smaller = q;
    }
    else{
        bigger = q;
        smaller = p;
    }

    if(root.val >= smaller.val && root.val <= bigger.val)
    {
        return root;
    }
    else if(root.val <= smaller.val ){
        return lowestCommonAncestor_235(root.right, bigger, smaller);
    }
    else if(root.val >= bigger.val){
        return lowestCommonAncestor_235(root.left, bigger, smaller);
    }
};

class ContainerTreeNodeLowestCommonAncestor{
    head: TreeNodeLowestCommonAncestor;

    constructor(){};
}

class TreeNodeLowestCommonAncestor{
    val: number;
    left: TreeNodeLowestCommonAncestor;
    right: TreeNodeLowestCommonAncestor;

    constructor(_val: number){
        this.val = _val
    }
}


let container = new ContainerTreeNodeLowestCommonAncestor();
let newNode = new TreeNodeLowestCommonAncestor(6);
container.head = newNode;
newNode = new TreeNodeLowestCommonAncestor(2);
container.head.left = newNode;
newNode = new TreeNodeLowestCommonAncestor(8);
container.head.right = newNode;
newNode = new TreeNodeLowestCommonAncestor(0);
container.head.left.left = newNode;
newNode = new TreeNodeLowestCommonAncestor(4);
container.head.left.right = newNode;
newNode = new TreeNodeLowestCommonAncestor(3);
container.head.left.right.left = newNode;
newNode = new TreeNodeLowestCommonAncestor(5);
container.head.left.right.right = newNode;
newNode = new TreeNodeLowestCommonAncestor(7);
container.head.right.left = newNode;
newNode = new TreeNodeLowestCommonAncestor(9);
container.head.right.right = newNode;

let lowestCommonAncestorResult = lowestCommonAncestor_235(container.head, new TreeNodeLowestCommonAncestor(7), new TreeNodeLowestCommonAncestor(9))

console.log(lowestCommonAncestorResult);


//Runtime: 123 ms, faster than 67.25% of TypeScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
//Memory Usage: 53 MB, less than 55.61% of TypeScript online submissions for Lowest Common Ancestor of a Binary Search Tree.