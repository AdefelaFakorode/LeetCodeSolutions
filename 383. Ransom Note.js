/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 /*
 ds:hashmap

 .split('') conv into char
 create a functon that iter thru var.
    place each char into the map n its freq
        key: char
        value: freq

        return map

compare map 1 n 2

if map1.keys/value is present in map2.keys/values
    return true
        return false

 */

        let aMap = (word) => {
            let map =  new Map()
            let characters = word.split('')
            for(const char of characters){ //populating the map...
                if(!map.has(char)){
                    map.set(char, 1)
                }else{
                    map.set(char, map.get(char) +1)
                }
            }
            return map
        }
        
        var canConstruct = function(ransomNote, magazine) {
           let map1 = aMap(ransomNote)
           let map2 = aMap(magazine)
        
            for(const [key,value] of map1){
                if(!map2.has(key) || map2.get(key) < value){
                    return false
                }
            }
        
            return true;
        };