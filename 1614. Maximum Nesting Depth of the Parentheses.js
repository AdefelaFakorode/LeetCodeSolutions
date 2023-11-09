/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    /*
    
    (1+(2*3)+((8)/4))+1
    1   2  1 23 2  1 0

    max = 0 
    currDepth = 0

    go thru with for-loop
    if char === '(' --> currDepth++
    max = Math.max(max, currDepth)
        else char === ')' --> currDepth--
        
        return max;

    */

    let max = 0;
    let currDepth = 0;

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char === '('){
            currDepth++;
            max = Math.max(max, currDepth)
        }else if(char === ')'){
            currDepth--;
        }
    }
    return max;
};