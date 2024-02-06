/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

/*

arr2 = [1,]
arr = [1,0,2,3,0,4,5,0]
         l          r     


iter thru the arr
if(arr[i] == 0)
    arr2.push[i] 
    arr2.push(0)
    l++
    r--
*/

var duplicateZeros = function (arr) {
    let otherArr = []
    let left = 0
    let right = arr.length - 1

    while (left < arr.length) {
        if (arr[left] === 0) {
            otherArr.push(arr[left])
            otherArr.push(0)
            left++
            right--
        }
        else {
            otherArr.push(arr[left])
            left++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = otherArr[i]
    }

    return otherArr
};