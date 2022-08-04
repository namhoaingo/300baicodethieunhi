//https://leetcode.com/problems/minimum-window-substring/
function minWindow(s: string, t: string): string {
    // neu still good, move left
    // neu bad, move right

    var t_dict = {};
    for(var i = 0; i < t.length; i++){
        if(t_dict[t[i]] == undefined){
            t_dict[t[i]] = 0;
        }else{
            t_dict[t[i]] = t_dict[t[i]] + 1;
        }
    }

    var isMatched = false;
    var left = 0;
    var s_dict  = {};
    var current_inspect_index  = 0;
    var current_max_left  = -1;
    var current_min_right = -1;
    for(var right = 0; right < s.length; right++){
        
        if(isMatched == false){
            // Them vao
            current_inspect_index = right;
            if(t_dict[s[current_inspect_index]] != undefined){
                // Char nay co trong t
                // Cho vao s_dict
                s_dict[s[current_inspect_index]] == undefined 
                    ? s_dict[s[current_inspect_index]] = 0
                    : s_dict[s[current_inspect_index]] = s_dict[s[current_inspect_index]] + 1;
                // determine the is Match
                isMatched = determind_is_match(s_dict, t_dict);
            }
        }
        else{
            current_max_left = Math.max(left, current_max_left);
            current_min_right = Math.min(right, current_min_right);
            // bo di
            current_inspect_index = left;
            // check dict
            if(t_dict[s[current_inspect_index]] != undefined){
                // t contain the char ---> change s_dict
                s_dict[s[current_inspect_index]] == undefined 
                    ? s_dict[s[current_inspect_index]] = 0
                    : s_dict[s[current_inspect_index]] = s_dict[s[current_inspect_index]] + 1;
            }
        }

    }
};


function determind_is_match(s_dict: Object, t_dict: Object): boolean{
    for (var t in t_dict){
        if(t_dict[t] > s_dict[t]){
            return false;
        }
    }
    return true;
}