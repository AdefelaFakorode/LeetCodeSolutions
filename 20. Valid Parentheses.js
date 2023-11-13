/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map([
        ['(',')'],
        ['{','}'],
        ['[',']']
    ])
    let stack = []

    for(let i =0; i < s.length; i++){
        char = s[i];
        if(map.has(char)){
            stack.push(char);
        }else{
            let prevOpening = stack.pop();
            if(map.get(prevOpening) !== char){
                return false;
            }
        }
    }
    return stack.length === 0;

};