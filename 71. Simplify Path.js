/**
 * @param {string} path
 * @return {string}
 */

/*

split function to approate substrings

itr thru split input
char -> add to stack
.. -> remove last input
. -> ignore/continue

then use join operation to turn back to string 

----> concatinat eusing '/'

*/

var simplifyPath = function(path) {
    let stack = [];
    let directory = path.split("/");
    for(let i = 0; i < directory.length; i++){
        let d = directory[i];
        if(d === '.' || !d){ // if . or // is seen then continue...
            continue;
        }else if(d === '..'){
            if(stack.length > 0){
                stack.pop();
            }
        }else{
            stack.push(d);
        }
    }
    return '/' + stack.join('/');
};