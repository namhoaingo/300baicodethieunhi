//https://leetcode.com/problems/generate-parentheses/

function generateParenthesis(n: number): string[] {
    let stack = [];
    let answer = [];

    function backtrack(open: number, close: number){
        if(open == close && open == n){
            answer.push(stack.join(""));
            return;
        }

        if(open < n){
            // cai nay phai o truoc cais xet open va close
            stack.push("(");
            backtrack(open+1, close);
            stack.pop();
        }

        if(close < open){
            stack.push(")");
            backtrack(open, close+1);
            stack.pop()
        }
    }

    backtrack(0, 0);
    return answer;
    
};
