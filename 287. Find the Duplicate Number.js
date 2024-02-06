/**
 * @param {number[]} nums
 * @return {number}
 */

/*
nums = [3,1,3,4,2]
        1 1 2  1 1

ds: hashmap

init map
iter thru the nums arr
    populate the map
        key:#
        value: freq

iter thru the map
if freq of a key > 1
return said key

return 0;
*/

var findDuplicate = function(nums) {
    let map = new Map()

    //populating map
    for(const num of nums){
        if(!map.has(num)){ //if not in map, init in map and init value to be 1
            map.set(num, 1)
        }else{
            map.set(num, map.get(num) + 1) //if in map freq++
        }
    }

    for(let [key] of map){
        if(map.get(key) > 1){
            return key
        }
    }

    return 0

};