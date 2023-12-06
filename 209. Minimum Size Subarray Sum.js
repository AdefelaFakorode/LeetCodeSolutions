/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/*
ds: sliding window
target var
nums array var

set up sliding window:
left = 0
for loop (right++)
sum = 0
sum += num[right]

while(sum > target) //keeping window valid n iterating thru it 
    sum-= nums[left]
    left++

let min 0 Math.min(min, right - left + 1)

return min

return count
*/

var minSubArrayLen = function(target, nums) {
    let min = Infinity
    let left = 0
    let sum = 0
    for(let right = 0; right < nums.length; right++){
        let num = nums[right]
        sum += num
        while(sum >= target){
            min = Math.min(min, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    
    if(min === Infinity){
        return 0
    }else{
        return min
    }
};