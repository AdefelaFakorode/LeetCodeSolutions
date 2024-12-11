/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let set = new Set()

    for (let i = 0; i < arr.length; i++) {
        let currVal = arr[i]
        if (set.has(currVal)) {
            return true
        }

        set.add(currVal * 2)
        set.add(currVal / 2)
    }
    return false
};