//breakdown:
//sort nums array .sort() method
//for loop -> interate through the sorted array
//if...repeats...return true
//else return false
//time compelxity: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums = nums.sort();
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]){
            return true;
        }
    }
    return false;
};


//another way
//time compelxity: O(n^2)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < seen.length; j++){
            if(nums[i] === seen[j]){
                return true;
            }
        }
        seen.push(nums[i]);
    }
    return false;
};