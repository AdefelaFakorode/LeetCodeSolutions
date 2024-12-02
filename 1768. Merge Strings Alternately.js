/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let merged = []
    let ptr1 = 0
    let ptr2 = 0

    while (ptr1 < word1.length && ptr2 < word2.length) {
        merged.push(word1[ptr1])
        ptr1++
        merged.push(word2[ptr2])
        ptr2++
    }

    while (ptr1 < word1.length) {
        merged.push(word1[ptr1])
        ptr1++
    }

    while (ptr2 < word2.length) {
        merged.push(word2[ptr2])
        ptr2++
    }

    return merged.join('')
};