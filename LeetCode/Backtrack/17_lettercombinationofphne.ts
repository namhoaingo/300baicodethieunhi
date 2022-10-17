//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
function letterCombinations(digits: string): string[] {
    let result = [];
    let part = [];

    let diction = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],

    }

    function dfs(keyIndex: number){
        if(keyIndex == digits.length){
            if(part.length>0){
                result.push(part.join(""));
            }
            return;
        }

        let letterDigit = digits[keyIndex];
        for(let letterInIndex = 0; letterInIndex < diction[letterDigit].length; letterInIndex++){
            part.push(diction[letterDigit][letterInIndex]);
            dfs(keyIndex+1);
            part.pop();
        }
    }

    dfs(0);
    return result;
};

console.log(letterCombinations(""));