/**
 * @param {string[]} logs
 * @return {string[]}
 */

/*
- init two arrays:
    letterLogsArray = []
    digitLogsArray = []

- iter thru logs array
    split(' ')
    for each string:
        if last elem is a char push into letterLogsArray
        if last elem is a digit push into diigtLogsArray

            in letterLogs do a sort call
            digitslogs reletive ordering

    ans = letterLogsArray + digitLogsArray
    ans.join('')
*/

var reorderLogFiles = function(logs) {
    let letterLogs = []
    let digitLogs = []

    for(let i = 0; i < logs.length; i++){ //distinguishing letterLogs and digitLogs
        //split each log entry into an array of words
        let logArray = logs[i].split(' ') //turns "a1 9 2 3 1" ==> ["a1", "9", "2", "3", "1"]

        if(isNaN(logArray[logArray.length - 1])){ //last element of log is a letter or digit
            letterLogs.push(logs[i]) //is a letter
        }else{ //is a digit
            digitLogs.push(logs[i])
        }
    }

    //sorting letterLogs
    letterLogs.sort((a, b) => {
        // Extract the letter logs excluding the identifier
        let logA = a.substring(a.indexOf(' ') + 1);
        let logB = b.substring(b.indexOf(' ') + 1);

        // Compare the letter logs
        if (logA !== logB) {
            return logA.localeCompare(logB);
        } else {
            // If the letter logs are the same, compare the entire logs
            return a.localeCompare(b);
        }
    });

    //concatining both logs into a single array
    let ans = letterLogs.concat(digitLogs)

    return ans;
};