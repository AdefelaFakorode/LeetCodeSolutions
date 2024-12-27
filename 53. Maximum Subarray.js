/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    /*
    ds: sliding window

    [5,4,-1,7,8]

    let maxSum = -Infinity
    let currSum = 0

    iter thru nums arr:
        currSum += nums[i]
        currMax = Math.max(currSum, currMax)

return curr Max

time comp: O(n) --> n being number of elements in arr
space comp O(1) --> no additional space depends on input size used
    */

    if(nums.length === 1){
        return nums[0]
    }

    if(nums.length === 0){
        return 0
    }

    let currMax = -Infinity 
    let currSum = 0

    for(let i = 0; i < nums.length; i++){
        if(currSum < 0){
            currSum = 0
        }

        currSum += nums[i]
        currMax = Math.max(currSum, currMax)
    }

    return currMax
};