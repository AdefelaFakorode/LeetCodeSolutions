/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    /*
    lexigraphical order: ordering sequence in ASC order from #'s to Chars

    ds: set
    word.sort()
    set = new Set([''])
    let longest = ''
    iter thru words arr
        if set has has currWord without the last char
            then add to set
                if word.length > longenst.length
                    longesst = word

    return longest

    time comp: O(n log n)
    space comp: O(n)
    */

    words.sort()
    let set = new Set([''])
    let longest = ''

    for (let word of words) {
        if (set.has(word.slice(0, -1))) {
            set.add(word)
            if ((word.length > longest.length)) {
                longest = word
            }
        }
    }
    return longest



};