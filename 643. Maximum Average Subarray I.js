/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


/*
ds: sliding window
init window n sliders:
left
sum
avg

if index is === 4:
calc avg of the elements
move left slider to update window

return avg

*/

var findMaxAverage = function(nums, k) {
    let left = 0
    let sum = 0
    let avg = -Infinity
    for(let right = 0; right < nums.length; right++){ //right bound iterating thru the array
        sum += nums[right]; //as bound interates thru array...add num to totalSum
        if(right - left + 1 === k){ //constraint if === to 4
            avg = Math.max(avg, sum/k) //get avbg

            sum-= nums[left] //get rid of that elemnt in the sum
            left++ //after update left bound
        }
    }

    return avg 

};