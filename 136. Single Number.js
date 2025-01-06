/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    /*
    ds: arrays

        find number that doesnt have duplicate in arr


        if arr.length = 1
        return arr[0]

        iter thru arr:
            populate hashmap
            key: number
            value: freq

        go thru hashmap and return key with freq === 1
    */

    let map = new Map()

    //populate map
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
        else{
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }

    //iter thru map and return one with value === 1
    for (const [key,value] of map) {
        if (value === 1) {
            return key
        }
    }

    return 0

    /*
    time comp:O(n)
    space comp: O(n) 
    */

};