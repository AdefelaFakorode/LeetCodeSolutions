/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) { //using two pointer 
    x = x.toString(); //turn array to string
    left = 0; //init left pointer
    right = x.length - 1; //init right pointer

    while(left < right){ //while left is not = to right return false
        if(x[left] !== x[right]){
            return false;
        }
        left++; //if not increment 
        right--;
    }
    return true; //return true
};