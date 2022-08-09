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
        var maxSpeed = maxSpeed;
        var minSpeed = absoluteMinSpeed;
        var currentTestingSpeed = Math.floor((absoluteMinSpeed + maxSpeed) /2);
        while(isValid(piles, h, currentTestingSpeed){

        }
    }



};

function isValid(piles: number[], h: number, speed: number): boolean{
    var totalHourWithCurrentSpeed = 0;
    for(var i = 0; i< piles.length; i++){
        var currentPileHour = piles[i] % speed == 0 ? piles[i] / speed : (piles[i]/speed) + 1;
        totalHourWithCurrentSpeed = totalHourWithCurrentSpeed + currentPileHour;
    }
    return totalHourWithCurrentSpeed <= h;
}