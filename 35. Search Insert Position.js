/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    /*
    given arr in ASC order
        if terget exist in arr
            return its index

        else
            return where it would be

        time comp:  O(log n)

    ds: Bianry Search
        iter thrut the arr
            cutting it in half every iteration
                and finding the target

            if not there
                where ever it stops at:

                if target < currNum
                    retrn currNum index - 1

                else 
                    return currNum index + 1
----------------------
    init left n right
    left - 0
    right - nums.length - 1

    while (left <= right)
        mid = Math.floor((left + right)/2)
        num = nums[mid]

        if(num === target)
        return mid

        if num < target
            right = mid - 1
        
        else{
            left = mid + 1
        }

    outside while loop:
        if target < nums[mid]
                    retrn mid - 1

                else 
                    return mid + 1

                    time comp: O(log n)
                    space comp: O(1)
    */

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        let num = nums[mid]

        if (num === target) {
            return mid
        }

        if (num > target) {
            right = mid - 1
        }

        else {
            left = mid + 1
        }
    }

    return left

};