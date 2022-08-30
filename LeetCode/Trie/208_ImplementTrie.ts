//https://leetcode.com/problems/implement-trie-prefix-tree/

// Implement a trie using Array with a dictionary
class Trie {
    root: TrieTreeNode;
    constructor() {
        this.root = new TrieTreeNode(false);
    }

    insert(word: string): void {
        this.insertRecursive(this.root, word, 0);
    }

    private insertRecursive(root: TrieTreeNode, word: string, index: number): void{
        let currentNode = root;
        if(index == word.length){
            currentNode.endOfWord = true;
            return;
        }
        
        if(!currentNode.nextTrieTreeNodes[word[index]]){
            let newNode = new TrieTreeNode(false);
            currentNode.nextTrieTreeNodes[word[index]] = newNode;
            index = index + 1;
            this.insertRecursive(newNode, word, index);
        }
        else{
            this.insertRecursive(currentNode.nextTrieTreeNodes[word[index]], word, index+1);
        }
    }

    search(word: string): boolean {
        return this.searchRecursive(this.root, word, 0);
    }

    private searchRecursive(root: TrieTreeNode, word: string, index: number): boolean{
        let currentNode = root;
        if(word.length == index && currentNode.endOfWord){
            return true;
        }

        if(currentNode.nextTrieTreeNodes[word[index]]){ 
            return this.searchRecursive(currentNode.nextTrieTreeNodes[word[index]], word, index + 1);
        }
        else{
            return false;
        }
    }

    startsWith(prefix: string): boolean {
        return this.startsWithRecursive(this.root, prefix, 0);
    }

    private startsWithRecursive(root: TrieTreeNode, prefix: string, index: number): boolean{
        let currentNode = root; 
        if(prefix.length == index){
            return true;
        }

        if(currentNode.nextTrieTreeNodes[prefix[index]]){
           return this.startsWithRecursive(currentNode.nextTrieTreeNodes[prefix[index]], prefix, index + 1);
        }
        else{
            return false;
        }
    }    
}

class TrieTreeNode{ 
    nextTrieTreeNodes: Object;
    endOfWord: boolean;

    constructor(_endOfWord: boolean){
        this.nextTrieTreeNodes = new Object();
        this.endOfWord = _endOfWord;
    }    

}


let testTrie = new Trie();
testTrie.insert("abc");
testTrie.insert("abd");

let findResult = testTrie.search("cccc");

let startWithResult = testTrie.startsWith("a");
startWithResult = testTrie.startsWith("d");
startWithResult = testTrie.startsWith("ab");
startWithResult = testTrie.startsWith("abc");
console.log(testTrie);

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


//Runtime: 327 ms, faster than 46.71% of TypeScript online submissions for Implement Trie (Prefix Tree).
//Memory Usage: 66 MB, less than 62.69% of TypeScript online submissions for Implement Trie (Prefix Tree).