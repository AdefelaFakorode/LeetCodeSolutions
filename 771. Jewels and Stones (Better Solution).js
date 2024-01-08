/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

/*
ds: set
create a set of jewels

count = 0

iter thru stones
    if stone exist as key in jewels
    count++

    return count
*/

var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels)
    count = 0;

    for(const stone of stones){
        if(set.has(stone)){
            count++
        }
    }
    return count

};