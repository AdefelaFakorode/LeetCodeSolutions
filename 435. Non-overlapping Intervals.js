/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    /*
    ds: arrays

    set intervals arr in ASC order
        iter thru intervals arr
            for each interval
                if interval[j] > interval[i]
                    remove iterval[i]
                    count++


    [[1,2],[1,3],[2,3],[3,4]]

    arr = [[1,2]]
    return count


    time comp: O(n log n)
    space comp: O(n)
    */

    //getting array in sending order

    let count = 0
    let sortedIntervals = intervals.sort((a,b) =>{
        return a[] - b[1]
    })

    let arr = [sortedIntervals[0]]

    for(let i = 1; i < sortedIntervals.length; i++){
        //populate new arr
        if(arr[arr.length - 1][1] > sortedIntervals[i][0]){
            count++
        }
        else{
            arr.push(sortedIntervals[i])
        }
    }

    return count
};