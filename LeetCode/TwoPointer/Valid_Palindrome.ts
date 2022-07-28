//https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
    // regular expression
    var expre = /[^a-z0-9]/gi;
    var cleaString = s.replace(expre, "").toLowerCase();
    
    if(cleaString.length==0 || cleaString.length==1){
        return true;
    }

    if(cleaString.length%2 == 1){
        // odd case
        var left = cleaString.length/2;
        var right = cleaString.length/2;
        for(var i = 0; i< cleaString.length/2; i++){
            if(cleaString.charAt(left - i) != cleaString.charAt(right+i))
            {
                return false;
            }
        }
    }
    else{
    // even case 
        var left = cleaString.length/2 -1;
        var right = cleaString.length/2;
        for(var i = 0; i< cleaString.length/2; i++){
            if(cleaString.charAt(left - i) != cleaString.charAt(right+i))
            {
                return false;
            }
        }
    }
    return true;
};


console.log(isPalindrome("aa"));