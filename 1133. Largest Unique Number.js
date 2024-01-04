/**
 * @param {number[]} nums
 * @return {number}
 */

/*
ds: hashmap

iter thru the nums arr
    populate it:
        key: the #
        value: freq

inter thru the keys
if key's value === 1

return Math.Max(ans, val
 ~end of loop

 return -1;
*/

var largestUniqueNumber = function(nums) {
    let map = new Map()

    for(const num of nums){//popul. map
        map.set(num, (map.get(num) || 0) + 1)
    }

    let ans = -1;

    for(const [key] of map){
        if(map.get(key) === 1){
            ans = Math.max(ans,key)
        }
    }
    return ans
};