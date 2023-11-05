/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    //ds: hashmap
/*
create a map
for loop that gets elements and places in map
if statm. 
number is in map ++
else: init 1

then check map again to see if i + 1
init a counter -> result

if there result+= 1;

return result...
*/

let map = new Map();

for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    if(map.has(num)){
        map.set(num, map.get(num) + 1);
    }else{
        map.set(num, 1);
    }
}
    
    //second iteration for i + 1
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(map.has(num + 1)){
            result += 1;
        }
    }
    return result;

};