/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    //creating sorterd array
    //map over strs -> str
    //for each str: split(), sort(), and join()
    let sorted = strs.map((str) => str.split("").sort().join(""));

    let map = {};
    
    for (let i = 0; i < sorted.length; i++) { //loop thru sorted array
        if (!map[sorted[i]]) { //check if map contains that value
            map[sorted[i]] = [strs[i]]; 
        } else {                    //if not add to the map and map to strs values
            map[sorted[i]].push(strs[i]);
        }
    }
    return Object.values(map);
};