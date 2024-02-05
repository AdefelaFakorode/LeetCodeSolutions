/**
 * @param {number[]} nums
 * @return {number}
 */

/*
ds: prefix sum

init prefix[nums[0]]
iter thru the nums arr
    convert nums to prefix arr

init splitCount

iter thru the nums arr
    compare prefix[i] - prefix[length - 1]
        if currSum >=  prefix[i]
        splitCount++

        return splitCount
*/

var waysToSplitArray = function(nums) {
    //getting prefix arr of nums arr
    let prefix = [nums[0]]
    for(let i = 1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }

    //init counter
    let splitCount = 0

    //iter thru nums arr 
    for(let i = 0; i < nums.length - 1; i++){
        let leftSection = prefix[i]
        let rightSection =  prefix[nums.length - 1] - leftSection ///sub leftSection to get the whole right section
        //comparing left section with right section
        if(leftSection >= rightSection){
            splitCount++
        }
    }

    return splitCount
};