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

     var twoSum = function (numbers, target) {
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
    };