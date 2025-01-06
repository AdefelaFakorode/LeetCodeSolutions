/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    /*
    ds: map
    iter thru nums arr:
        populate map
        key: number
        value: freq

    if  max freq > n/2
    return freq
    else return 0
    return key w/ max freq
    
    time comp: O(n)
    space comp: O(n)
    */


    if(nums.length === 1){
        return nums[0]
    }

    if(nums.length === 0){
        return 0
    }

    let map = new Map()
    let n = nums.length

    for (let i = 0; i < nums.length; i++) {
        //populating map
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
        map.set(nums[i], map.get(nums[i]) + 1)
    }

    let maxKey = null
    let maxFreq = -Infinity

    for(const [key,value] of map.entries()){
        if(maxFreq < value){
            maxFreq = Math.max(maxFreq, value)
            maxKey = key
        }
    }
    return maxKey
};