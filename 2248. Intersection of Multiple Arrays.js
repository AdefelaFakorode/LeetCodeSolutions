/**
 * @param {number[][]} nums
 * @return {number[]}
 */


/*
iter. thru 2D to get the elements in each subarray
place each element into a map -- > key:char  value: freq
if: freq in map is === to amount of time number is in each array 
push it into a new array...then return that new arrat

*/

var intersection = function(nums) {
    let map = new Map();
    let newArray = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            let num = nums[i][j];
            if(!map.has(num)){
                map.set(num, 1) // make char/freq
            }else{
                map.set(num, map.get(num) + 1) // ++ freq
            }
        }
    }
    for(let [num, freq] of map){
        if(freq === nums.length){
            newArray.push(num);
        }
    }
    newArray.sort((a,b) => a-b);
    return newArray;
};