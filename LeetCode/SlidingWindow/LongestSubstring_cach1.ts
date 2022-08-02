//https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring_cach1(s: string): number {
    var max_counter = 0;
    var counter = 0;
    var dict = {};
    for(var i = 0; i < s.length; i++){
        if(dict[s[i]] != undefined){           
            i = dict[s[i]] + 1;    
            max_counter = Math.max(max_counter, counter);
            counter = 0;
            dict = {};  
        }

        dict[s[i]] = i;
        counter = counter + 1;
        
    }
    return Math.max(max_counter, counter);
};

console.log(lengthOfLongestSubstring_cach1("abcabcbb"));

// Runtime: 683 ms, faster than 13.20% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 70.1 MB, less than 5.03% of TypeScript online submissions for Longest Substring Without Repeating Characters.