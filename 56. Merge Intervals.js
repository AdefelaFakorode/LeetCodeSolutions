/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    /*
    ds: arrays

    [1,3],[2,6] 
    [1,6]

    [1,5],[2,4]
    [1,4]


    - Understanding this always in ASC order
        no need to rearrange this given arr

    - If arr is empty we return []

    intervals = [[1,3],[2,6],[8,10],[15,18]]

    init seperate arr

    iter thru intervals arr:
        iter thru individual interval:
            if iterval[end] > nextInterval[start] || iterval[end] > nextInterval[start] && interval[end] > nextInterval[end]:
                interval[start, newEnd]

            arr.push(interval)

    return arr
    */

    if (!intervals || intervals.length === 0) return [];

        intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let arr = [intervals[0]] // [1,3] >= [2,6]
    for (let i = 1; i < intervals.length; i++) {
        if (arr[arr.length - 1][1] >= intervals[i][0]) {
            arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1], intervals[i][1])
            arr[arr.length - 1][0] = Math.min(arr[arr.length - 1][0], intervals[i][0])
        }

        else {
            arr.push(intervals[i])
        }
    }

    return arr
};