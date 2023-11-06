/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    s = s.split('');
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        char = s[i]; // Use char, not num
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1); // Use char, not num
        }
    }

    let firstCharFreq = map.get(s[0]);

    for (let freq of map.values()) {
        if (freq !== firstCharFreq) {
            return false;
        }
    }
    
    return true;
};
