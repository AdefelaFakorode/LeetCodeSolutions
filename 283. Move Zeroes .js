/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*
 in an array
    move all 0s to the end
        all non zeros should remain in same place

 ds: two pointers
 init left = 0
 init right = 0

 while left < right
    compare:
        if nums[left] !== 0
            swap with right
            right++

        else

        left++

return nums;
 
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = 0

    while(left < nums.length){
        if(nums[left] != 0){
            //could also have swapped like this:
            // [nums[left],nums[right]] = [nums[right],nums[left]]
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            right++
        }
        left ++
    }
    return nums
};