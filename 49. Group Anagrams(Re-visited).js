/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
ds: hashmap
anagram -> diff. word with same amount of char 
inter thru the arr
for each word
turn sort it
init into map:
    key: sorted word
    value: []

if word aligns with key
    push word into the key

    then push the values into a arr
*/

var groupAnagrams = function (strs) {
    let map = new Map();
    for (const word of strs) { //populating map
        let sortedWord = word.split('').sort().join('')
        if (!map.has(sortedWord)) {
            map.set(sortedWord, [])
        }

        map.get(sortedWord).push(word) //push word into key, when sortedWord is present
    }
    let ans = []
    for (const words of map.values()) {
        ans.push(words)
    }
    return ans
};