/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    /*
    ds: two ptrs appraoch

    sort people arr
        people = [1,2,2,3]
                  ^ 
                  ^
            count = 3
        limit = 3
    
    let left = 0
    let right = people.length - 1

    while(left <= right)
        if( Pleft + Pright <= limit)
            left++

        right--
        count++
    return count
    */

    people.sort((a,b) =>{
         return a - b
    })

    let count = 0
    let left = 0
    let right = people.length - 1

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++
        }

        right--
        count++
    }

    return count

};