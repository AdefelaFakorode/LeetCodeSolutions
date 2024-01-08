/**
 * @param {number[]} nums
 * @return {number[]}
 */

 /*
 arr = []
 sum = 0
 
 iter thru the nums arr
 arr.push(nums[0])
    sum += num
    arr.push(sum)
 
 */

    var runningSum = function(nums) {
        let arr = []
        let sum = 0
    
        for(const num of nums){
            sum += num
            arr.push(sum)
        }
    
        return arr
    };