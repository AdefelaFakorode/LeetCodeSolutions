/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
init map
key: number
value: freq

init arr

iter thru the map
sort the keys in DESC   
    according to its freq
            ex:
                a 5
                b 20
                c 0
                bac
iter thru that arr for as much as K
    push element into the arr


return arr


retrun arr
*/

var topKFrequent = function (nums, k) {
    let map = new Map();
    let arr = [];

    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }

    // Retrieve entries within an array
    let arrOfKV = [...map.entries()];

    // Sorting in DESC order according to frequency
    arrOfKV.sort((a, b) => b[1] - a[1]);

    // Push the first k elements into the result array
    for (let i = 0; i < k; i++) {
        arr.push(arrOfKV[i][0]);
    }

    return arr;
};