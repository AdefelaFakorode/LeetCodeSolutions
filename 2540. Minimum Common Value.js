/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    /*

    ds: two ptrs

    ptr1 0
    ptr2 = 0
    minVal = -1

while ptr1 < nums.length && ptr2 < nums.length
    if arr1[ptr1] == arr2[ptr2]
    minVal = arr1

    return minVal

    if arr1[ptr1] < arr2[ptr2]
    pt1++

    else
    prt2++

    return minVal

        */

        let ptr1 = 0
        let ptr2 = 0
        let minVal = -1

        while(ptr1 < nums1.length && ptr2 < nums2.length){
            if(nums1[ptr1] == nums2[ptr2]){
                minVal = nums1[ptr1]
                return minVal
            }

            if(nums1[ptr1] < nums2[ptr2]){
                ptr1++
            }

            else{
                ptr2++
            }
        }
        return minVal
};
