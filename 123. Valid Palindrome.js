/**
 * @param {string} s
 * @return {boolean}
 */

/*
ds - two pointer
1) clean the string
2) rev. the string
3) check for palindrome

while loop
racecar
l     r
 l   r
   lr
   rl 
   l <= r ---> return true
 */

//time complexity: O(n)

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g,""); //cleanign stiring
    let l = 0; // left pointer
    let r = s.length - 1; //right pointer

    while(l <= r){
        if(s[l] === s[r]){ //if l n r are same continue
            l++;
            r--;
        } else{ // else its not a palindrome
            return false;
        }
    }
    return true; //if went thru whole string...its then been identified as a palindrome
};