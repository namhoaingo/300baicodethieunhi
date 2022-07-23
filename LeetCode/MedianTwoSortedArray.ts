function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    var totalSize = nums1.length + nums2.length;  
    var half = Math.floor(totalSize / 2);

    
    // if (nums2.length < nums1.length)
    // {
    //     var swap = nums1;
    //     nums1 = nums2;
    //     nums2 = swap;
    // }

    var nums1_left = 0;
    var nums1_right = nums1.length - 1;
   
    while (true){
        var try_median_index_from_nums1 = Math.floor((nums1_right + nums1_left)/2);
        var try_median_index_from_nums2 = half - try_median_index_from_nums1 - 2;

        var nums1_left_value = try_median_index_from_nums1 >= 0 ? nums1[try_median_index_from_nums1] : - Number.MAX_VALUE;
        var nums1_right_value = try_median_index_from_nums1 + 1 >= 0 && try_median_index_from_nums1 + 1 < nums1.length ? nums1[try_median_index_from_nums1 + 1] : Number.MAX_VALUE;
        var nums2_left_value = try_median_index_from_nums2 >= 0 ? nums2[try_median_index_from_nums2] : -Number.MAX_VALUE;
        var nums2_right_value = try_median_index_from_nums2 + 1 >= 0 && try_median_index_from_nums2 + 1 < nums2.length ? nums2[try_median_index_from_nums2 + 1] : Number.MAX_VALUE;
        
        if((nums1_left_value <= nums2_right_value)
            && (nums2_left_value <= nums1_right_value))
            {
                if(totalSize % 2 == 0){
                return (Math.max(nums1_left_value, nums2_left_value)
                        + Math.min(nums1_right_value, nums2_right_value)) / 2;
                }
                else{
                    return Math.min(nums1_right_value, nums2_right_value);
                }
            }
        else if (nums1_left_value > nums2_right_value){
            nums1_right = try_median_index_from_nums1 - 1;
        }
        else{
            nums1_left = try_median_index_from_nums1 + 1;
        }
    }    
    
};

 //console.log(findMedianSortedArrays([1,2,3,4,7,8], [5,6]));


 ///DIT CON ME, MINH NHAN RA LA MINH DEO HOP VOI CAI MON PROGRAMMING NAY
 // TON THOI GIAN VAI CA LON 
 // UC CHE
 // DEO hoc duoc cai lon gi moi 
 // be tac