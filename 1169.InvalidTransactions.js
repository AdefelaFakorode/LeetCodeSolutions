/**
 * @param {string[]} transactions
 * @return {string[]}
 */

/*
- init array holding invalid trans
- iter thru trans[i]

name time, amount, city

if statement:
amount > 1000
name1 === name2 && time > 60 && city1 !== city2 

return array of invalid trans...

*/

//brute force method

/* 
var invalidTransactions = function (transactions) {
    let invalidTransaction = [];

    for (let i = 0; i < transactions.length; i++) { // iter thru trans and spliting them into an array
        let [name1, time1, amount1, city1] = transactions[i].split(',')

        //Condition 1
        if (parseInt(amount1 )> 1000) {
            invalidTransaction.push(transactions[i])
        }

        //Condition 2 -> with same NAME, if TIME < 60 and in DIFFERENT CITY

        for (let j = 1; j < transactions.length; j++) {
                let [name2, time2, amount2, city2] = transactions[j].split(',')

            if (name1 === name2 && Math.abs(parseInt(time1) - parseInt(time2)) <= 60 && city1 !== city2) {
                invalidTransaction.push(transactions[i]);
            }
        }
    }

    return invalidTransaction;
};
*/

//using a map 

/*
- init invalidTrans array
- inti a map

-split trans into array with name, time, amount, city

-populate the map
-key => name
-value => array of trans []

-for eacj trans => split trans

condiiton 1:
amount > 1000

condiiton 2:
if map has name
    get array of trans mathcing that name

    if same name vilates conditions:

        add to invalidTrans

        return invalidTrans
*/

var invalidTransactions = function (transactions) {
    let invalidTransaction = [];
    let transactionMap = new Map();

    // Group transactions by name
    for (let i = 0; i < transactions.length; i++) {
        let [name, time, amount, city] = transactions[i].split(',');

        if (!transactionMap.has(name)) {
            transactionMap.set(name, []);
        }

        transactionMap.get(name).push({ time, amount, city, original: transactions[i] });
    }

    // Check conditions using the grouped transactions
    for (let i = 0; i < transactions.length; i++) {
        let [name1, time1, amount1, city1] = transactions[i].split(',');

        // Condition 1 -> if amount is greater than 1000
        if (parseInt(amount1) > 1000) {
            invalidTransaction.push(transactions[i]);
            continue;
        }

        // Condition 2 -> with the same NAME, if TIME < 60 and in DIFFERENT CITY
        if (transactionMap.has(name1)) {
            let transactionsWithSameName = transactionMap.get(name1);

            if (!transactionsWithSameName.every((trans) =>
                Math.abs(parseInt(time1) - parseInt(trans.time)) > 60 || city1 === trans.city
            )) {
                invalidTransaction.push(transactions[i]);
            }
        }
    }

    return invalidTransaction;
};