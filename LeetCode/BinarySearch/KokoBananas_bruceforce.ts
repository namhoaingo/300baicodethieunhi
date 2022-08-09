//https://leetcode.com/problems/koko-eating-bananas/
function minEatingSpeed_bruceforce(piles: number[], h: number): number {
    // find the absolute minimum time required
    var totalBanana = 0;
    var absoluteMaxSpeed = 0;
    for(var i = 0; i < piles.length; i++){
        totalBanana = totalBanana + piles[i];
        absoluteMaxSpeed = Math.max(absoluteMaxSpeed, piles[i]);
    }

    var absoluteMinSpeed = Math.ceil(totalBanana/h);
    // keep increasing until correct

    if(isValid(piles, h, absoluteMinSpeed)){
        return absoluteMinSpeed;
    }
    else{
        var upperSpeed = absoluteMaxSpeed;
        var lowerSpeed = absoluteMinSpeed;
        while(true){
            
            var currentTestingSpeed = Math.floor((lowerSpeed + upperSpeed) /2);
           
            if(isValid(piles, h, currentTestingSpeed)){
                if(currentTestingSpeed == lowerSpeed){
                    return currentTestingSpeed;
                }
                // neu van valid, giam xuong
                upperSpeed = currentTestingSpeed;
            }else{
                lowerSpeed = currentTestingSpeed + 1;
            }
        }
    }
};

function isValid(piles: number[], h: number, speed: number): boolean{
    var totalHourWithCurrentSpeed = 0;
    for(var i = 0; i< piles.length; i++){
        var currentPileHour = piles[i] % speed == 0 ? piles[i] / speed : Math.floor((piles[i]/speed)) + 1;
        totalHourWithCurrentSpeed = totalHourWithCurrentSpeed + currentPileHour;
    }
    return totalHourWithCurrentSpeed <= h;
}


console.log(minEatingSpeed_bruceforce([3,6,7,11], 8))

//Runtime: 145 ms, faster than 34.74% of TypeScript online submissions for Koko Eating Bananas.
//Memory Usage: 46.6 MB, less than 28.42% of TypeScript online submissions for Koko Eating Bananas.