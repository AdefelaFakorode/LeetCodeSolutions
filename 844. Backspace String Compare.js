/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
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