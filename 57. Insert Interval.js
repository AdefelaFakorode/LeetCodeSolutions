/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    /*
    ds: arrays

    merge itervals into a single arr:
        intervals.push(newInterval)


    put intervals arr in ASC order
        based on their starting index

    init empty arr = []

    iter thru intervals:
        if interval[0]'s end index is >= intervals[1]s's //theres an overlap
            take inter0's start and end ='s inter1's end
                if its bigger than inter0's end

                time comp: O(N^2) -> because of the nested for loops for sorting
                space comp: O(n) --> because space needed to allocated results array

                Could make time comp faster to O(n log n) w/ sort() method
    */
    //merging intervals and newInterval
    intervals.push(newInterval)

    // //sorting intervals arr in ASC order -- makes it slower
    // for (let i = 0; i < intervals.length; i++) {
    //     for (let j = i + 1; j < intervals.length; j++) {
    //         if (intervals[i][0] > intervals[j][0]) {
    //             let temp = intervals[i]
    //             intervals[i] = intervals[j]
    //             intervals[j] = temp
    //         }
    //     }
    // }

    //sorting intervals arr in ASC order
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });


    // [[1,3], [2,5], [6,9]]
    // [1,3]
    let result = []
    let endMax = -Infinity

    for (let i = 0; i < intervals.length; i++) {
        if (result.length === 0 || result[result.length - 1][1] < intervals[i][0]) {
            result.push(intervals[i])
        }

        else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
        }
    }

    return result


};