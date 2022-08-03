//https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement_notwork(s: string, k: number): number {
    var dict = {};
    var max_count = 0;
    var starting = true;
    var first_position_change = 0;
    var replacing_count = 0;
    var running_count = 0;
    var start_index = 0;
    while(start_index < s.length){
        if(starting){
            dict[s[start_index]] = 1;
            running_count = 1;
            starting = false;
            replacing_count = 0;
            start_index= start_index + 1;
        }
        else if(dict[s[start_index]] != undefined){
            // same charactor, keep going
            running_count = running_count + 1;
            start_index = start_index + 1;            
        }else if(dict[s[start_index]] == undefined){
            // new character, check k
            if(replacing_count==0){
                first_position_change = start_index;
            }
            if(replacing_count < k){
                replacing_count = replacing_count + 1;
                running_count = running_count + 1;
                start_index = start_index + 1;
            }
            else{
                start_index = first_position_change;
                dict = {};
                starting = true;
            }
        }
        max_count = Math.max(max_count, running_count);
    }
    return max_count;
};

console.log(characterReplacement("ABBB", 2));