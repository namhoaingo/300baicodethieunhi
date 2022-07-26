//https://leetcode.com/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {

    var size_plus = s.length;
    var size_minus = t.length;

    if (size_plus != size_minus) return false;
    var dict = {}
    for (var index = 0; index < size_plus; index++) {
        var plus_chart_at_index = s.charAt(index);
        var minus_chart_at_index = t.charAt(index);

        if (dict[plus_chart_at_index]) {
            // if plus 
            dict[plus_chart_at_index] = dict[plus_chart_at_index] + 1;
        }
        else {
            dict[plus_chart_at_index] = 1;
        }

        if (dict[minus_chart_at_index]) {
            dict[minus_chart_at_index] = dict[minus_chart_at_index] - 1;
        }
        else {
            dict[minus_chart_at_index] = -1;
        }
    }
    // Get the result sum
    
    for (let key in dict){
        if (dict[key] > 0){
            return false;
        }
    }

    return true;
};


//console.log(isAnagram("rat", "cat"));
//console.log(isAnagram("anagram", "nagaram"));



//*****************************Result******************************************* */
// Runtime: 107 ms, faster than 79.52% of TypeScript online submissions for Valid Anagram.
// Memory Usage: 44.6 MB, less than 83.98% of TypeScript online submissions for Valid Anagram.