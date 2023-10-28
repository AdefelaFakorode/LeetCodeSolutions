/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//time complexity: O(n)

var twoSum = function(nums, target) {
    const map = {}; //going to us hashmap ds

    for(let i = 0; i < nums.length; i++){
        let number = nums[i];
        let complement = target - number; //finding difference between target n num

        if(complement in map){ //if difference is in the map...
            return [i, map[complement]]; //... return the indices of the current index and the index of the complement
        }else{
            return map[number] = i; //that number is the key and the value will be its index 
        }
    }
};