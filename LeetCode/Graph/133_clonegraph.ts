//https://leetcode.com/problems/clone-graph/
/**
 * 
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */
 class Node133 {
     val: number
     neighbors: Node133[]
     constructor(val?: number, neighbors?: Node133[]) {
         this.val = (val===undefined ? 0 : val)
         this.neighbors = (neighbors===undefined ? [] : neighbors)
     }
 }
 
function cloneGraph(node: Node133 | null): Node133 | null {
	
    // This array contains all the number of element which has been visited
    let dict = {};

    function createNode(node: Node133 | null){        
        
        if(dict[node.val] == undefined){
            // create node 
            let newNode = new Node133(node.val);

            node.neighbors.forEach(neighbor =>{
                createNode(neighbor);
            })

            dict[node.val] = newNode;            
        }
        else{
            return;
        }

    }

    return null;

};