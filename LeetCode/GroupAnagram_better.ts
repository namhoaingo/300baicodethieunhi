https://www.youtube.com/watch?v=vzdNOK2oB2E&ab_channel=NeetCode

var groupAnagrams_better = function (strs) {
    let res = {}; //mapping charCount to list of anagrams i.e "1e,1a,1t": ["eat", "tea", "ate"]
    for(let s of strs) {
        //To count each char:
        let count = new Array(26).fill(0); //for a....z
        //We'll index a to 0 till z to idx 25
        for(let c of s) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        let commaSeparatedCount = count.join(",");
        if(commaSeparatedCount in res) {
            res[commaSeparatedCount].push(s)
        } else {
            res[commaSeparatedCount] = [s];
        }
        //console.log("res: ", res);
        //console.log("Object.values(res): ", Object.values(res))
    }
    return Object.values(res);
}