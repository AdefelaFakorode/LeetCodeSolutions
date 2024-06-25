class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let emptyString= ""
        for(let i = 0; i < strs.length; i++){
            emptyString += strs[i].length + "#" + strs[i]
        }
        return emptyString

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0

        while(i < str.length){
            let j = i
            while(str[j] != "#"){
                j++
            }
            let length = parseInt(str.substring(i, j), 10);
            i = j + 1;
            j = i + length;
            result.push(str.substring(i, j));
            i = j;
        }
        return result
    }
}
