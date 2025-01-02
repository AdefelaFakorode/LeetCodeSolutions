/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    /*
    0:red
    1:white
    2:blue

    base case:
    if doesnt exist -> return
    if empty - > return

    init count1 = 0 -> red
    init count2 = 0 -> white
    init count3 = 0 -> blue

    iter thru nums arr
        if 0 + count1++
        if 1 + count1++
        if 2 + count1++

    using .fill fucntion

    fill arr in place with the freq of its self

    return nums

    time comp: O(n)
    space comp: O(1)

    */
    
    if (!nums || nums.length === 0) {
        return
    }

    let count1 = 0
    let count2 = 0
    let count3 = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count1++
        }

        else if (nums[i] === 1) {
            count2++
        }

        else {
            count3++
        }
    }

    nums.fill(0,0,count1)
    nums.fill(1,count1, count1 + count2)
    nums.fill(2,count1 + count2)
};