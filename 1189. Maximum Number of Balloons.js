/**
 * @param {string} text
 * @return {number}
 */

/*
ds: hashmap

populate map with char in word balloon
    init each char to 0

map =
b: 0
a: 0
l: 0
l: 0
o: 0
n: 0

inter thru text n populate accordingly

return Math.floor(Math.min(map.b,map.a...map.l/2..))

}
*/

var maxNumberOfBalloons = function (text) {
    let map = new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0]
    ])

    for(const char of text){
        if(map.has(char)){
            map.set(char, map.get(char) + 1)
        }
    }

    return Math.floor(
        Math.min(map.get('b'), map.get('a'), map.get('l') / 2, map.get('o') / 2, map.get('n'))
    );
    
};