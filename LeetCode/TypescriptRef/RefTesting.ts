class TestRefTreeNode{
    val: number;
    left: TestRefTreeNode;
    right: TestRefTreeNode;
    constructor(_val: number){
        this.val = _val;
    }
    
}



function changeTestRef(){
    // class live on the Heap
    let resultHead: TestRefTreeNode = null;
    console.log(resultHead);
    changeTestRef_take_in_Node(resultHead);
    console.log(resultHead);
}

function changeTestRef_take_in_Node(treeNode: TestRefTreeNode){
    // If you assign to the NEW VALUE
    // The ORIGNAL object will not changed
    treeNode = new TestRefTreeNode(1);

    //https://stackoverflow.com/questions/639514/how-can-i-get-the-memory-address-of-a-javascript-variable/639535
    // if change a property, 
    // THE Orignal WILL GET CHANGED
    treeNode.val = 1
}

changeTestRef();