//https://leetcode.com/problems/search-in-rotated-sorted-array/
// Chien luoc la tim cai so bij thay doi
// thay doi no lai cho chuan
// va chien
function search_first_try_wrong(nums: number[], target: number): number {
   return binarySearchModified(nums, target);
};

function binarySearchModified(nums: number[], target: number){
    var start = 0;
    var end = nums.length - 1;
    while(true){
        var converage = false; 
        var startNum = nums[start];
        var endNum = nums[end];
        var mid = Math.floor((start + end) / 2);
        var midNum = nums[mid]; 
        if(startNum > endNum){
            converage = true;
        }
        if(target == midNum){
            return mid;
        }
        else if (start == end || start >= nums.length || end < 0){
            return -1;
        }
        if(converage){
            if (target > midNum){
                if(target > endNum){
                    end = mid - 1
                }else {
                    start = mid + 1;
                }
            }else{
                if(target > endNum){
                    end = mid - 1;
                }else{
                    start = mid + 1;
                }
            }
        }else{
            if(target > midNum){
                start = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }

    }
}

console.log(search_first_try_wrong([4,5,6,7,8,1,2,3],8));