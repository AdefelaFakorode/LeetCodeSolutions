/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let map = new Map();
    
    for(const n of nums){ 
        map.set(n, true); //populating map
    }
    
    for(let i = 0; i < nums.length; i++){ //iterate thru nums array
        if(!map.has(i)){
            return i;
        }
    }
    return nums.length;
};