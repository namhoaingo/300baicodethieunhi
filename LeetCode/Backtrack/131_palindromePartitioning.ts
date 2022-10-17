//https://leetcode.com/problems/palindrome-partitioning/


// Bai nay kho ca ve concep va execution
function partition_131(s: string): string[][] {
    let res = new Array();
    let part = new Array();

    function dfs(i: number){
        if(i >= s.length){
            res.push([...part]);
            return;
        }

        for(let count = i; count < s.length; count++){
            // Dont go to decision yet
            // Split first 
            // check 
            // then continue
            if(isPali(s, i, count)){
                part.push(s.substring(i, count+1));
                dfs(count+1);
                part.pop()
            }
        }
    }

    function isPali(s: string, start: number, end: number): boolean{
        while(start < end){
            if(s[start] != s[end])
            {return false}
            start = start+1;
            end = end-1;
        }

        return true;
    }

    dfs(0);
    return res;
};

console.log(partition_131("aab"));