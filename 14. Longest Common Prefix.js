/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    /*
    given arr of strings
        strs = ["flower","flow","flight"]
        finding common prefix strings

        init arr = [strs[0]]

        inter thru strs arr:
            if any strs[i] are common in arr[arr.length - 1]
                let result = those chars that are common

        return result


        init set
        iter thru strs arr
            if doesn thave populate set
    */

    let prefix = strs[0] // flower

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, prefix.length - 1)

            if (!prefix) {
                return ''
            }
        }
    }
return prefix
};