//https://leetcode.com/problems/minimum-window-substring/
function minWindow(s: string, t: string): string {
    // neu still good, move left
    // neu bad, move right

    var t_dict = {};
    var s_dict  = {};
    for(var i = 0; i < t.length; i++){
        if(t_dict[t[i]] == undefined){
            t_dict[t[i]] = 1;
        }else{
            t_dict[t[i]] = t_dict[t[i]] + 1;
        }
        // Set s_dict to 0
        s_dict[t[i]] = 0;        
    }

    var isMatched = false;
    var left = 0;
    var current_inspect_index  = 0;
    var current_found_left  = -1;
    var current_found_right = -1;
    var min_length = -1;
    for(var right = 0; right <= s.length; right++){
        if(isMatched == false){
            // Them vao
            current_inspect_index = right;
            if(s_dict[s[current_inspect_index]] != undefined){
                // Char nay co trong t
                // Cho vao s_dict                
                s_dict[s[current_inspect_index]] = s_dict[s[current_inspect_index]] + 1;
                // determine the is Match
                isMatched = determind_is_match(s_dict, t_dict);
            }
        }
        else{
            var length = right - left;
            if(min_length == -1){
                min_length = length;
                current_found_left = left;
                current_found_right = right;
            }
            else if(min_length > length){
                min_length = length;
                // Only recalculate left and right after isMatch is true
                current_found_left = left;
                current_found_right = right;
            }
            
            // bo di
            current_inspect_index = left;
            // check dict
            // if s_dict contain this key, we need to remove it
            if(s_dict[s[current_inspect_index]] != undefined){
                // t contain the char ---> change s_dict
                s_dict[s[current_inspect_index]] = s_dict[s[current_inspect_index]]-1;
            }
            isMatched = determind_is_match(s_dict, t_dict);
            left = left + 1;
            // dont change right
            right = right - 1;
        }
    }
    if(current_found_right >= 0 && current_found_left >= 0){
        return s.substring(current_found_right, current_found_left);
    }
    return "";
};


function determind_is_match(s_dict: Object, t_dict: Object): boolean{
    for (var t in t_dict){
        if(t_dict[t] > s_dict[t]){
            return false;
        }
    }
    return true;
}

console.log(minWindow("cabwefgewcwaefgcf","cae"));


// Runtime: 515 ms, faster than 8.90% of TypeScript online submissions for Minimum Window Substring.
// Memory Usage: 52.8 MB, less than 9.42% of TypeScript online submissions for Minimum Window Substring.