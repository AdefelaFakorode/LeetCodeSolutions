/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let chars = s.split(''); //converting string to array of letters
    let left = 0;
    let right = s.length - 1;

    let isLetter = function(char){
        return /^[A-Za-z]$/.test(char); //function to test if its letter
    }

    while(left < right){
        if(isLetter(chars[left]) && isLetter(chars[right])){ //if letters
            [chars[left], chars[right]] = [chars[right], chars[left]]; //then swap
            left++; 
            right--;
        }else{
            if(!isLetter(chars[left])){ //if left is not letter -> skip
                left++;
            }
            if(!isLetter(chars[right])){ //if right is not letter -> skip
                right--;
            }
        }
    }
    return chars.join(''); //convert array of letters back to a string
};