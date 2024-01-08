/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

/*
ds:hashmap
create a function:
    init a map
    split jewels n stones into char
        inter thru arr of char
            populate map:
                key: char
                value: freq

iter thru stones
init count
    if key in stones in present in key of jewels
        count += key's value

return count
*/

let aMap = (text) =>{
    let map = new Map()
    let characters = text.split('')
    for(const char of characters){ //popul. the map
    map.set(char, (map.get(char) || 0) + 1) //inti freq n val's
    }
    return map
}


var numJewelsInStones = function(jewels, stones) {
    let map1 = aMap(jewels)
    let map2 = aMap(stones)

    let count = 0;
    for(const [key,value] of map2){
        if(map1.has(key)){
            count += value
        }
    }
    return count;
};