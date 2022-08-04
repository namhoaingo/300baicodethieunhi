//https://leetcode.com/problems/minimum-window-substring/
function minWindow(s: string, t: string): string {
    // neu still good, move left
    // neu bad, move right

    var t_dict = {};
    var s_dict = {};
    var need = 0;
    for (var i = 0; i < t.length; i++) {
        if (t_dict[t[i]] == undefined) {
            t_dict[t[i]] = 1;
            need = need + 1;
        } else {
            t_dict[t[i]] = t_dict[t[i]] + 1;
        }
        // Set s_dict to 0
        s_dict[t[i]] = 0;
    }

    var isMatched = false;
    var left = 0;
    var current_inspect_index = 0;
    var current_found_left = -1;
    var current_found_right = -1;
    var min_length = -1;
    var have = 0;
    
    for (var right = 0; right <= s.length; right++) {
        if (isMatched == false) {
            // Them vao
            current_inspect_index = right;
            if (s_dict[s[current_inspect_index]] != undefined) {
                // Char nay co trong t
                // Cho vao s_dict                
                s_dict[s[current_inspect_index]] = s_dict[s[current_inspect_index]] + 1;
                // determine the is Match
                [isMatched, need, have] = determind_is_match(true,s[current_inspect_index], s_dict, t_dict, need, have);
            }
        }
        else {
            var length = right - left;
            if (min_length == -1) {
                min_length = length;
                current_found_left = left;
                current_found_right = right;
            }
            else if (min_length > length) {
                min_length = length;
                // Only recalculate left and right after isMatch is true
                current_found_left = left;
                current_found_right = right;
            }

            // bo di
            current_inspect_index = left;
            // check dict
            // if s_dict contain this key, we need to remove it
            if (s_dict[s[current_inspect_index]] != undefined) {
                // t contain the char ---> change s_dict
                s_dict[s[current_inspect_index]] = s_dict[s[current_inspect_index]] - 1;
                [isMatched, need, have] = determind_is_match(false, s[current_inspect_index], s_dict, t_dict, need, have);
            }
            left = left + 1;
            // dont change right
            right = right - 1;
        }
    }
    if (current_found_right >= 0 && current_found_left >= 0) {
        return s.substring(current_found_right, current_found_left);
    }
    return "";
};


function determind_is_match(isAdding: boolean, current_key: string, s_dict: Object, t_dict: Object, need: number, have: number): [boolean, number, number] {
    if (isAdding) {
        // Add in, and we have a new match
        if (s_dict[current_key] == t_dict[current_key]) {
            have = have + 1;
        }

    } else {
        if (t_dict[current_key] == s_dict[current_key] + 1) {
            have = have - 1;
        }
    }

    if (need == have) {
        return [true, need, have];
    }

    return [false, need, have];
}

console.log(minWindow("aa", "aa"));

// Runtime: 185 ms, faster than 38.74% of TypeScript online submissions for Minimum Window Substring.
// Memory Usage: 51.6 MB, less than 15.71% of TypeScript online submissions for Minimum Window Substring.