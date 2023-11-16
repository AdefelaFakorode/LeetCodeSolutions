/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*

create 2 seprate stacks for s n t
    if( stack == #) -> stack.pop()
    else --> stack.push(char)

    return stackS.join('') === stackT.join('');

Time comp: O(n) , n being the size of the string of vat s and t

*/

var backspaceCompare = function(s, t) {
    let stackS = [];
    let stackT = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '#') {
            stackS.pop();
        }else{
            stackS.push(char);
        }
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (char === '#') {
            stackT.pop();
        }else{
            stackT.push(char);
        }
    }

    return stackS.join('') === stackT.join('');
};
