//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
function letterCombinations_c2(digits: string): string[] {
    let result = [];

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
    
    for(let digitIndex = 0; digitIndex < digits.length; digitIndex++){
        let array = [];
        for(let letterIndexInDict = 0; letterIndexInDict < diction[digits[digitIndex]].length; letterIndexInDict++){
            array.push(diction[digits[digitIndex]][letterIndexInDict]);
        }
    }    


    return result;
};

console.log(letterCombinations(""));