/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    /*
    ds: hash map

    itr for-loop insert each element (key)
    its index will be stored into the map (value)

    difference = target - num
    if difference is found in the hashmap, return the differnce and index  
    else, set it into the map
    */

    let map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let difference = target - num;
        if (map.has(difference)) {
            return [map.get(difference) + 1, i + 1];
        }
        map.set(num, i)
    }
    return [];
};