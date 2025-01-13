/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    let result = [[]]; // Start with the empty subset

    for(let num of nums){
        let arr = []
        for(let entry of result){
            arr.push([...entry,num])
        }
        result.push(...arr)
    }
    return result
}