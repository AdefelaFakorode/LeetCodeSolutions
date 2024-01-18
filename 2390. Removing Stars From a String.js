/**
 * @param {string} s
 * @return {string}
 */

/*
 
ds: stack

init stack 

iter thru string
   if(char === *){
       stack.pop()
   }else{
       stack.push(char)
   }

return stack.join("")
*/
var removeStars = function (s) {
    let stack = []

    for (const char of s) {
        if (char != "*") {
            stack.push(char)
        } else {
            stack.pop()
        }
    }

    return stack.join("")
};