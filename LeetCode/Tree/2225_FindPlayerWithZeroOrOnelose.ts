//https://leetcode.com/problems/find-players-with-zero-or-one-losses/

function findWinners(matches: number[][]): number[][] {
    let player_lostCount = new Object();
    matches.forEach(element => {
       if(!player_lostCount[element[0]]) {
        player_lostCount[element[0]] = 0
       }
       
       if(!player_lostCount[element[1]]){
        player_lostCount[element[1]] = 1;
       }
       else{
        player_lostCount[element[1]]++;
       }
    });
    
    let result1 = new Array<number>();
    let result2 = new Array<number>();
    Object.keys(player_lostCount).map(key =>{

        if(player_lostCount[key] == 0){

            result1.push(Number(key));
        }

        else if(player_lostCount[key] < 2){
            result2.push(Number(key));            
        }
    });
    
    return [result1.sort((a,b) => a - b), result2.sort((a,b) => a - b)];
};
// Time out

//Runtime: 653 ms, faster than 72.73% of TypeScript online submissions for Find Players With Zero or One Losses.
//Memory Usage: 105 MB, less than 90.91% of TypeScript online submissions for Find Players With Zero or One Losses.