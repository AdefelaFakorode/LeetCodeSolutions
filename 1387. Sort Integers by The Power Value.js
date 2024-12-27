/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
    /*

    //helper function to get power values
    conditionals:
        if odd:
            x = x / 2

        if even:
            x = 3 * x + 1

    power value = # of steps for x to become 1

    iter thru arr:
        count = 0
        let x = lo
        while x != 1
            run conditionals:
                if odd..
                else (even) ...
                count++

            sorted by count (power)
            init map
            key: number
            value: count

        sort by count size

        return Kth element in map

        time comp: O(n log n) --> n being the size of the interval
        space comp: O(n) --> n is the size of the interval
    */

    //helper function to compute power values and populating map 
    var getPower = (x) => {
        let count = 0;
        while (x != 1) {
            if (x % 2 === 0) { // if even
                x = x / 2;
            } else { // if odd
                x = 3 * x + 1;
            }
            count++;
        }
        return count
    }

    let arr = []
    let map = new Map();
for (let i = lo; i <= hi; i++)
    {// converting iterval into array
        arr.push(i) // [12,13,14,15]
        map.set(i, getPower(i)) // [[12, 9],[13, 9],[14, 17],[15, 17]]
    }

    arr.sort((a, b) => {
    if (map.get(a) === map.get(b)) { //sort is ASC is power values are equal
        return a - b
    }

    return map.get(a) - map.get(b) //sort by power value
})

return arr[k - 1]
};