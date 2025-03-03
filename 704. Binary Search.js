/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }

        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1

    /*
    time comp: O(log n), divides the search space in half in each iteration
    space comp: O(1), using fixed amount of memeory
    */
};