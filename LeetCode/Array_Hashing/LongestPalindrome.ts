function longestPalindrome(s: string): string {
    var res = "";
    var resLen = 0;

    for (var i = 0; i < s.length; i++){
        // odd case
        var left = i;
        var right = i;
        // Nếu left và right vẫn nằm trong giới hạn
        // và chữ ở left bằng chứ ở right
        // tiếp tục
        while(left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)){
            // Nếu số lượng chữ giữa phải và trái lớn hơn kêts quả hiện tại
            if(right - left + 1 > resLen){
                resLen = right - left + 1;
                res = s.substring(left, right + 1);                
            }

            right = right + 1;
            left = left - 1;
        }
        // even case
        var left = i;
        var right = i + 1;
        // Nếu left và right vẫn nằm trong giới hạn
        // và chữ ở left bằng chứ ở right
        // tiếp tục
        while(left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)){
            // Nếu số lượng chữ giữa phải và trái lớn hơn kêts quả hiện tại
            if(right - left + 1 > resLen){
                resLen = right - left + 1;
                res = s.substring(left, right + 1);                
            }

            right = right + 1;
            left = left - 1;
        }
    }
    return res;
};

//console.log(longestPalindrome("babad"));