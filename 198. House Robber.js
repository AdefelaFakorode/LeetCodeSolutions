/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0]
    }

    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    let prevPrevMax = 0
    let prevMax = 0

    for (const num of nums) {
        let currentMax = Math.max(prevMax, prevPrevMax + num)
        prevPrevMax = prevMax
        prevMax = currentMax

    }

    return prevMax

/*
time comp: O(n)
space comp: O(1)
*/
};