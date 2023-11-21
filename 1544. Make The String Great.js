/**
 * @param {string} s
 * @return {string}
 */

/*

ds: stack 

init empty stack
s = s.lowercase();

for-loop iter thru string
    each element = char

    stack.push(char)

    if(stack[length -1] === char){
        stack.pop()
    }


*/

var makeGood = function(s) {
    let stack = [''];

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        let top = stack[stack.length -1]; //getting the top
        if(top.toLowerCase() === char.toLowerCase() && top !== char){
            stack.pop();
        }else{
            stack.push(char)
        }
    }
    return stack.join('');
};