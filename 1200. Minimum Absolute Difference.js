/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    /*
    ds: sliding window

    arr = [4,2,1,3]
    orderedArr = [1,2,3,4]
                  l
                    r
    */
// [-20,11,26,27,40]
    let orderedArr = arr.sort((a, b) => a - b) //getting orignal arr in order
    let left = 0
    //let difference = Infinity
    let minDifference = Infinity
    let ans = []
    for (let right = 1; right < orderedArr.length; right++) {
        let a = orderedArr[left] - orderedArr[right]
        let currDifference = Math.abs(a)

        if (currDifference < minDifference) { 
            minDifference = currDifference 
            ans = [[orderedArr[left], orderedArr[right]]] //resets the pair

        }else if(currDifference === minDifference){
            ans.push([orderedArr[left], orderedArr[right]])
        }
        left++
    }

    return ans
};