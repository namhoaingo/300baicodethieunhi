//https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    var left_pointer = 0; 
    var right_pointer = 0;
    var dict = {};
    var max_count = 0;
    for(right_pointer = 0; right_pointer < s.length; right_pointer++){
        if(dict[s[right_pointer]] != undefined){
            // I have duplicate
            // left pointer will move away from the dup charactor one unit
            left_pointer = dict[s[right_pointer]] + 1;
            // remove this from the dict
            // Update with the new value
            dict[s[right_pointer]] = right_pointer;
            // remove everything before the left pointer from the dict as well. 
            for(var key in dict){
                if(dict[key] < left_pointer){
                    dict[key] = undefined;
                }
            }
        }
        else{
            dict[s[right_pointer]] = right_pointer;
        }
        
        max_count = Math.max(max_count, right_pointer - left_pointer + 1);
    }
    
    return max_count;
};

// Runtime: 440 ms, faster than 22.70% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 52.7 MB, less than 11.85% of TypeScript online submissions for Longest Substring Without Repeating Characters.
console.log(lengthOfLongestSubstring("abcabcbb"))