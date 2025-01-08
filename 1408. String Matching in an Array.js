/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    /*
    ds: array

    nested for loop
        outer loop:
            inner loop:
            if i != j && its in there
                push into arr
                    break


    return arr
    */
    let arr = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0 ; j < words.length; j++) {
            if (i != j && words[j].includes(words[i])) {
                arr.push(words[i])
                break
            }
        }
    }

    return arr
};