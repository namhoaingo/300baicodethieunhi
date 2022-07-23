function findMedianSortedArrays_2(nums1: number[], nums2: number[]): number {
    var totalSize = nums1.length + nums2.length;
    var totalHalf = Math.floor(totalSize/2);

    if(nums1.length < nums2.length){
        var swap = nums1;
        nums1 = nums2;
        nums2 = swap;
    }
    
    var nums1_right_index = nums1.length -1 ;
    var nums1_left_index = 0;
    while (true){
        var nums1_left_partition_end_index = Math.floor((nums1_left_index + nums1_right_index)/2);
        // trừ đi 2 bỏi vì cả 2 array đều bắt đầu tứ 0 index
        var nums2_left_partition_end_index = totalHalf - nums1_left_partition_end_index - 2;
        
        // get value to compare
        var nums1_left_partition_end_value = nums1_left_partition_end_index >= 0 ? nums1[nums1_left_partition_end_index] : - Number.MAX_VALUE;
        var nums1_right_partition_start_value = nums1_left_partition_end_index + 1 < nums1.length ?  nums1[nums1_left_partition_end_index + 1] : Number.MAX_VALUE;
        var nums2_left_partition_end_value = nums2_left_partition_end_index >= 0 ? nums2[nums2_left_partition_end_index] : - Number.MAX_VALUE;
        var nums2_right_partition_start_value = nums2_left_partition_end_index + 1 < nums2.length ? nums2[nums2_left_partition_end_index + 1] : Number.MAX_VALUE;

        if(nums1_left_partition_end_value <= nums2_right_partition_start_value 
            && nums2_left_partition_end_value <= nums1_right_partition_start_value
            )
            {
                if(totalSize % 2 == 0){
                    var left = Math.max(nums1_left_partition_end_value, nums2_left_partition_end_value);
                    
                    var right = Math.min(nums2_right_partition_start_value, nums1_right_partition_start_value);
                    return 
                    ( left
                    + right)
                    / 2;
                }
                else{
                    return Math.max(nums1_left_partition_end_value, nums2_left_partition_end_value)
                }                
            }
            else if (nums1_left_partition_end_value > nums2_right_partition_start_value){
                nums1_left_index = nums1_left_partition_end_value - 1;
            }
            else{
                nums1_right_index = nums1_left_partition_end_value + 1;
            }
    }

}

//var result = findMedianSortedArrays_2([1,2,3,4,7,8], [5,6]);

