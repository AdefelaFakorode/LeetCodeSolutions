/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//time complexity: O(n)

var isAnagram = function (s, t) {
    if (s.length != t.length) { //CASE 1: If the words do not have the same number of letters, they are not anagrams
        return false;
    }

    const map = {}; //creating an empty hashmap to check the frequency of each letter (key) and the number of that letter (value)

    //this first for loop creates the hashmap filled with the letters

    for (let i = 0; i < s.length; i++) { //iterating through the first word
        let letter = s[i]; //initialize every letter in the word
        if (map[letter]) { //if the letter is in the hashmap, increase the frequency by 1
            map[letter]++;
        } else { //else initialize the frequency of that letter to 1
            map[letter] = 1;
        }
    }

    //second for loop iterates through the hashmap to see if the word has the same letters

    for (let i = 0; i < t.length; i++) {
        let letter = t[i];

        if (map[letter] === undefined) { //if the letter is not in there, return false
            return false;
        }

        if (map[letter] < 1) { //more of the same letter in the 2nd word than in the 1st word...return false
            return false;
        }
            map[letter]--; //if the letter is there, then decrement
    }
    return true;
};
