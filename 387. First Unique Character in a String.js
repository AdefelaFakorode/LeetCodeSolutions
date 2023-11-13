/**
 * @param {string} s
 * @return {number}
 */

/*
ds: hashmap
turn string -> array of char...
init map
----------------------
for-loop ---> each element --> char
if in map: ++

else init char to 1

if char in  map has freq = 1: return i (index)

afte iteration:
return -1;
*/
var firstUniqChar = function(s) {
    let map = new Map();
    s = s.split('');
    //populating the hashmap...
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        }else{
            map.set(char, 1);
        }
    }

    //checking for # of non-repeating char in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if(map.get(char) === 1){ //if you find char in map with freq of 1 
            return i; //return that index
        }
    }
    return -1;
};