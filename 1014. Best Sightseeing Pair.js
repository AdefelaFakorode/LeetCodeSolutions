/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let maxScore = -Infinity; 
    let currMax = values[0];

    for (let j = 1; j < values.length; j++) {

        maxScore = Math.max(maxScore, currMax + values[j] - j);
        
        currMax = Math.max(currMax, values[j] + j);
    }

    return maxScore;
}