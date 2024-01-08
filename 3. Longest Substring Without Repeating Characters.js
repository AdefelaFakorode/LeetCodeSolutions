/**
 * @param {string} s
 * @return {number}
 */

/*
"a b c a b c b b"
1 2 3 2 1 0 -1 -2
hs: set
char = s.split(') --> turning into an array of char

init a map
init count = 0 
init max = 0
iter thru arr of char
    diff way of popul. map
        if char is not there 
            count++
            max = Math.max(max, count)

            else{
                count--
            }

*/
//"p w w k e w"
// 1 2 1 2 3 2

var lengthOfLongestSubstring = function(s) {
    let characters = s.split('')
    let set = new Set()
    let count = 0
    let max = 0
    let start = 0

    for(const char of characters){
        while(set.has(char)){
            set.delete(characters[start]);
            start++
            count--
        }

        set.add(char)
        count++
        max = Math.max(max, count)
    }
    return max;
};