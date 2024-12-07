/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    /*
    ds: two ptrs
    [0,0,1,1,1,2,2,3,3,4]
     1   2

    ptr1 = 0
    ptr2 = 1

    if nums are equal
        do nothing
    
    if !equal
        l++
        change it to ptr2 num
    
    then return ptr1 + 1

    time comp: O(n)
    space comp: O(n)
    */

    let ptr1 = 0
    for(let ptr2 = 1; ptr2 < nums.length; ptr2++){
        if(nums[ptr1] != nums[ptr2]){
            ptr1++
            nums[ptr1] = nums[ptr2]
        }
    }

    return ptr1 + 1

};