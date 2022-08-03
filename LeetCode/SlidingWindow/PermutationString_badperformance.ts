//https://leetcode.com/problems/permutation-in-string/

function checkInclusion_badperfomance(s1: string, s2: string): boolean {
    // add all s1 into a dictionary with count for each word
    var s1_dict = {};
    var s1_len = s1.length;
    for(var s1_index = 0; s1_index < s1.length; s1_index++){
        if(s1_dict[s1[s1_index]] == undefined){
            s1_dict[s1[s1_index]] = 1;
        }else{
            s1_dict[s1[s1_index]] = s1_dict[s1[s1_index]] + 1;
        }
    }
    var s1_dict_copy = Object.assign({}, s1_dict);
    var left = 0;
    //loop through s2
    //for(var i = left; i < s2.length ; i++){
    var i = left;    
    while(i < s2.length){
        if(s1_dict_copy[s2[i]] != undefined){
            // contain char
            s1_dict_copy[s2[i]] = s1_dict_copy[s2[i]] - 1;
            if(s1_dict_copy[s2[i]] >=0)
            {
                s1_len = s1_len - 1;
                i = i + 1;
            }else{
                // reset data
                s1_len = s1.length;
                s1_dict_copy = Object.assign({}, s1_dict);
                left = left + 1;
                i = left;
            }
            
            if(s1_len == 0){
                return true;
            }
        }else{
                // reset data
                s1_len = s1.length;
                s1_dict_copy = Object.assign({}, s1_dict);
                left = left + 1;
                i = left;
        }
    }

    return false;
};

//console.log(checkInclusion_badperfomance("abcdxabcde", "abcdeabcdx"));

// Runtime: 5174 ms, faster than 13.07% of TypeScript online submissions for Permutation in String.
// Memory Usage: 51.4 MB, less than 15.55% of TypeScript online submissions for Permutation in String.

// This is O(n2)