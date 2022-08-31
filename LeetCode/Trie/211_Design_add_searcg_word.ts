//https://leetcode.com/problems/design-add-and-search-words-data-structure/


class WordDictionary {
    a_charcode = "a".charCodeAt(0);
    root: TrieTreeWordDictNode;
    constructor() {
        this.root = new TrieTreeWordDictNode();
    }

    addWord(word: string): void {
        //this.addWordRecursive(this.root, word, 0);
        this.addWordNotRecursive(this.root, word);
    }

    private addWordRecursive(root: TrieTreeWordDictNode, word: string, index: number): void{
        let currentNode = root;
        if(index == word.length){
            currentNode.endOfWord = true;
            return;
        }

        if(currentNode.childs[word[index].charCodeAt(0) - this.a_charcode]){
            this.addWordRecursive(currentNode.childs[word[index].charCodeAt(0) - this.a_charcode], word, index + 1);                
        }else{
            // add new node
            let newNode = new TrieTreeWordDictNode();
            currentNode.childs[word[index].charCodeAt(0) - this.a_charcode] = newNode;
            this.addWordRecursive(newNode, word, index + 1);
        }
    }

    private addWordNotRecursive(root: TrieTreeWordDictNode, word: string){
        let currentNode = root;
        for(let i = 0; i < word.length; i++){
            if(!currentNode.childs[word[i].charCodeAt(0) - this.a_charcode]){
                currentNode.childs[word[i].charCodeAt(0) - this.a_charcode] = new TrieTreeWordDictNode();
            }
            currentNode = currentNode.childs[word[i].charCodeAt(0) - this.a_charcode];
        }
        currentNode.endOfWord = true;
    }

    search(word: string): boolean {
        //return this.searchRecursive(this.root, word, 0);   
        return this.searchNoRecursive(this.root, word, 0);
    }

    private searchRecursive(root: TrieTreeWordDictNode, word: string, index: number): boolean{
        let currentNode = root;

        if(word.length == index){
            return currentNode.endOfWord;
        }

        if(word[index] == "."){
            for(let i = 0; i < currentNode.childs.length; i++){
                if(currentNode.childs[i]){
                    let findNext = this.searchRecursive(currentNode.childs[i], word, index+1);
                    if(findNext){
                        return true;
                    }
                }
            }
            return false;
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

    private searchNoRecursive(root: TrieTreeWordDictNode, word: string, index: number): boolean{
        let currentNode = root;

        for(let i = index; i < word.length; i++){                                
            if(word[i] == "."){
                for(let j = 0; j < currentNode.childs.length; j++){
                    if(currentNode.childs[j]){
                        // if it has value
                        let searchResult = this.searchNoRecursive(currentNode.childs[j], word, i + 1);
                        if(searchResult){
                            return true;
                        }
                    }
                }
                return false;
            }
            else{
                if(currentNode.childs[word[i].charCodeAt(0) - this.a_charcode])
                // contain the ref to the next key
                {
                    currentNode = currentNode.childs[word[i].charCodeAt(0) - this.a_charcode];
                }
            }
        }
        return currentNode.endOfWord;
    }
}

class TrieTreeWordDictNode{
    childs: Array<TrieTreeWordDictNode>;
    endOfWord: boolean;

    constructor(){
        this.childs = new Array<TrieTreeWordDictNode>();
        this.endOfWord = false;
    }
}

// Testing
let trieTreeWordDict = new WordDictionary();
trieTreeWordDict.addWord("at");
trieTreeWordDict.addWord("and");
trieTreeWordDict.addWord("an");
trieTreeWordDict.addWord("add");
console.log(trieTreeWordDict);

let resultSearch = trieTreeWordDict.search("am.");
console.log(resultSearch);

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */