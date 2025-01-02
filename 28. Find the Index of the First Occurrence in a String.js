/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    /*
    ds: arr

    if !haystack || haystack.length === 0:
        return -1

    if "sad" exist:
        return its index of the first letter

    if "sad" doesnt exist:
        return -1


    get length of needle string
        [s,a,d] => 3

    iter thru haystack arr:
            push into newArr

    [s,a,d]
         ^
    [s,a,d,b,u,t,s,a,d]
         ^

    return  -1

    time comp: O(n)
    space comp: O(1)
    */

    if (needle.length === 0) {
        return 0
    }

    if (haystack.length < needle.length) {
        return -1;
    }

    let ptr1 = 0
    let ptr2 = 0
    /*
    "mississippi"
             ^
    "issip"
         ^
    */

    while (ptr2 < haystack.length) {
        if (needle[ptr1] === haystack[ptr2]) {
            ptr1++
            ptr2++

            if (ptr1 === needle.length) {
                return ptr2 - ptr1
            }
        }

        else {
            let oldPtr1 = ptr1
            ptr1 = 0
            ptr2 = (ptr2 - oldPtr1) + 1
        }

    }

    return -1
};