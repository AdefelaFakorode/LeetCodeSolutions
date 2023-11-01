/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    /*
    - convert sentense into array of words "Let's take LeetCode contest" ==> ["Let's" "take" "LeetCode" "contest"]
    - seprate array to hold rev words
    - for each word I will covert them into letters
    - then I'll use TP to rev the letters 
    - push all that into rev words array
    - return value
    */
    let revWords = [];
    let words = s.split(" "); //["Lets", "take"...]
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let letters = word.split(""); //['L''e''t''s'...]
        let left = 0;
        let right = letters.length - 1;

        while (left < right) { //swapping & moving poitners each iter
            let temp = letters[left];
            letters[left] = letters[right];
            letters[right] = temp;
            left++;
            right--;
        }
        revWords.push(letters.join("")); //joining letters to words
    }
    return revWords.join(" "); //joining words to sentance again...
};