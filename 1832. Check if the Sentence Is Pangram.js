/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let letters = sentence.split(''); // convert sentence into a array of chars
    let map = new Map; // allocate map
    for(const i in letters){ 
        let char = letters[i]
        if(!map.has(char)){ //check if map has char or not
            map.set(char,true)
        }
    }
    return map.size === 26; //see if map has all 26 alphabets
};