/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    /*
    defenition:
    prefix - letters which we add to the beginning of a word to make a new word with a different meaning

    follow up questions:
    - Are the strings always lowercase?
    - Any #'s in these strings?
    - Does pref always exist, never going to be empty??
    - Does it includes space bettwen chars?

    Make sure that the strings being compared arent the same

    init a set()
    set = [
        attention
        attend
        attend --> if already exist, count++
    ]

    iter thru arr
        if (pref string is in element) --> using .includes
            count++
            place each in set()
            return count

        timespace: O9n)
        space comp: O(n)
    */

    // let count = 0
    // for(let i = 0; i < words.length ;i++){
    //     if(words[i].includes(pref) && words[i].slice(0,pref.length) === pref){ // and elements first indexes have pref
    //     count++
    //     }
    // }

    //found ever faster solution:

    let count = 0
    for(let i = 0; i < words.length ;i++){
        if(words[i].startsWith(pref)){ // and elements first indexes have pref
        count++
        }
    }
    
    return count

};