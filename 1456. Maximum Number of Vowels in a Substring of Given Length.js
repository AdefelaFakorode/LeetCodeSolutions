/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
s -> a string
k -> size of substring
ds: sliding window

split string into letters

forloop(right++)

while( right >= k){
    tempArray = have letters in sub array
    if subarray contains letters vowils
        increase count
}
return count
*/

var maxVowels = function (s, k) {
    let left = 0;
    let max = 0;
    let count = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    for (let right = 0; right < s.length; right++) {
        let char = s[right]

        if (vowels.has(char)) {
            count++
        }
        while (right - left + 1 > k) {
            if (vowels.has(s[left])) {
                count--
            }
            left++
        }
        max = Math.max(max, count);
    }
    return max
};