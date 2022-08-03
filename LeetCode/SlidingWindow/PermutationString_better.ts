//https://leetcode.com/problems/permutation-in-string/
// O(n) approach
function checkInclusion(s1: string, s2: string): boolean {
    // create two dictionary with the count of 26 abc each. 
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var s1_dict = {};
    var s2_dict = {};
    for (var i = 0; i < alphabet.length; i++) {
        s1_dict[alphabet[i]] = 0;
        s2_dict[alphabet[i]] = 0;
    }

    // populate the s1_dict with correct data
    for (var i = 0; i < s1.length; i++) {
        s1_dict[s1[i]] = s1_dict[s1[i]] + 1;
    }

    // matches example will be 22. because we have a bunch of 0
    var current_matches = 0;
    for (var key in s1_dict) {
        if (s1_dict[key] == s2_dict[key]) {
            current_matches = current_matches + 1;
        }
    }

    //var maxlength_index = s1.length - 1;
    var left = 0;
    for (var right = 0; right < s2.length; right++) {
        if (right - left == s1.length) {
            if (s1_dict[s2[left]] == s2_dict[s2[left]] - 1) {
                current_matches = current_matches + 1;
            }
            if (s1_dict[s2[left]] == s2_dict[s2[left]]) {
                current_matches = current_matches - 1;
            }
            s2_dict[s2[left]] = s2_dict[s2[left]] - 1
            left = left + 1;
        }

        if (s1_dict[s2[right]] == s2_dict[s2[right]] + 1) {
            current_matches = current_matches + 1;
        }
        if (s1_dict[s2[right]] == s2_dict[s2[right]]) {
            current_matches = current_matches - 1;
        }

        // insert into the dict
        s2_dict[s2[right]] = s2_dict[s2[right]] + 1;
        if (current_matches == 26) {
            return true;
        }
    }
    return false;
};

//console.log(checkInclusion("ab", "eidbaooo"));