/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let left = 0;
    let right = 0;
    let array = word.split(''); //converting to array full of letters

    for(let i = 0; i < array.length ; i++){ //iterating thru array to find ch in it
        if(array[i] === ch){
            right = i; // init right to the index when found
            break;
        }
    }
    while(left < right){ //swap
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array.join(''); //convert back to string
};