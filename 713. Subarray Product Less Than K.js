/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
ds: sliding window
if k <= 0
return 0

init left bounds : 0
init right bounds forloop(right = 0)
init currP
init maxCount
  for
    currP = nums[right]
    while(currP > k)
    currP /= nums[left]
    left++

    maxCount + = right - left - 1
    then...
    return maxCount

*/

var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) {
        return 0
    }

    let left = 0
    let currProduct = 1
    let maxCount = 0

    for (let right = 0; right < nums.length; right++) {
        currProduct *= nums[right]
        while (currProduct >= k) {
            currProduct /= nums[left]
            left++
        }
        maxCount += right - left + 1
    }
    return maxCount
};