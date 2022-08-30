//https://leetcode.com/problems/design-add-and-search-words-data-structure/


class WordDictionary {
    a_charcode = "a".charCodeAt(0);
    root: TrieTreeWordDictNode;
    constructor() {
        this.root = new TrieTreeWordDictNode();
    }

    addWord(word: string): void {
        this.addWordRecursive(this.root, word, 0);
    }

    private addWordRecursive(root: TrieTreeWordDictNode, word: string, index: number): void{
        let currentNode = root;
        if(index == word.length){
            currentNode.endOfWord = true;
        }

        if(currentNode.childs[word[index].charCodeAt(0) - this.a_charcode]){
            this.addWordRecursive(currentNode.childs[word[index].charCodeAt(0) - this.a_charcode], word, index + 1);                
        }else{
            // add new node
            let newNode = new TrieTreeWordDictNode();
            currentNode.childs[word[index].charCodeAt(0) - this.a_charcode] = newNode;
        }
    }

    search(word: string): boolean {
        return this.searchRecursive(this.root, word, 0);   
    }

    private searchRecursive(root: TrieTreeWordDictNode, word: string, index: number): boolean{
        let currentNode = root;
        let stackForBackTrack = new Array();

        if(word.length == index){
            return true;
        }

        if(word[index] == "."){
            for(let i = 0; i < currentNode.childs.length; i++){
                if(currentNode.childs[i]){
                    let findNext = this.searchRecursive(currentNode.childs[i], word, index+1);
                    if(!findNext){
                        return false;
                    }
                }
            }
        }
        else{
            if(currentNode.childs[word[index].charCodeAt(0) - this.a_charcode]){
               return this.searchRecursive(currentNode.childs[word[index].charCodeAt(0) - this.a_charcode], word, index + 1)
            }
            else{
                return false;
            }
        }
    }
}

class TrieTreeWordDictNode{
    childs: Array<TrieTreeWordDictNode>;
    endOfWord: boolean;

    constructor(){
        this.childs = new Array<TrieTreeWordDictNode>();
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */