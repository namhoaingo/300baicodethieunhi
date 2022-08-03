//https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(s: string, k: number): number {
   var dict_word_count = {};
   var left = 0; 
   var right = 0;
   var current_max = 0;
   var already_added = false;
   while(right < s.length){
        
        if(!already_added){
            if(dict_word_count[s[right]] == undefined){
            dict_word_count[s[right]] = 1;
            }
            else{
                dict_word_count[s[right]] = dict_word_count[s[right]] + 1;
            }
            var max_count = getMaxCount(dict_word_count);
        }
        if(right - left + 1 - max_count <= k) {                
                current_max = Math.max(current_max, right-left+1);
                right = right + 1;
                already_added = false;                
        }
        else{
            // change the count for current left
            dict_word_count[s[left]] = dict_word_count[s[left]] - 1;            
            left = left + 1;
            already_added = true;
        }        
   }
   return current_max;
};

function getMaxCount(dict: Object){
    var current_max_count = 0; 
    for(var key in dict){
        current_max_count = Math.max(dict[key], current_max_count);
    }
    return current_max_count;
}
//console.log(characterReplacement("ABAA", 0));