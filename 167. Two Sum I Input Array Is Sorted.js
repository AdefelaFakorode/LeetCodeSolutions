/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


/*
ds: two ptrs
        ASC order
        target = 13
[2,4,6,7,14,52]
 f     s

     return indices + 1

 */

/*     var twoSum = function (numbers, target) {
        let left = 0
        let right = numbers.length - 1
    
        while (left < right) {
            let currSum = numbers[left] + numbers[right]
            if (currSum === target) {
                return [left + 1, right + 1]
            } else if (currSum < target) {
                left++
            }
            else {
                right--
            }
    
        }
    };*/

    /**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


/*
ds: hashmap solution
    init map
    key: num
    value: index

    init index = 1
    get complement = target - num
    if map has comp
        return comp and its index

    else{
        map add num n its index
        index++
    }

 */

var twoSum = function (numbers, target) {
    let map = new Map()
    let index = 1
    for(let num of numbers){
        let complement = target - num
        if(map.has(complement)){
            return [map.get(complement), index]
        }
        map.set(num, index)
        index++
    }
};