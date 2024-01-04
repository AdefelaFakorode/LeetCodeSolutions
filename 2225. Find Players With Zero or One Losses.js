/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

/*
ds: hashmap
init 2 maps:
    1) losers
    2) allPlayers

inter thru matches
    populate the loser & allPlayers map
        key: players
        value: freq 


init noLost arr
init oneLost arr

    inter thru allPlayers map
        if allPlayers key is not present within loser keys
            push into noLost arr

        if looser key === 1
            push into oneLost arr

    return [noLost,oneLost]
*/

var findWinners = function (matches) {
    let losers = new Map();
    let allPlayers = new Map();

    for (let i = 0; i < matches.length; i++) { 
        let winner = matches[i][0]
        let loser = matches[i][1]
        //popul. losers map
        losers.set(loser, (losers.get(loser) || 0) + 1)

        //popul. allPlayers map
        allPlayers.set(winner, (allPlayers.get(winner) || 0) + 1) //winner
        allPlayers.set(loser, (allPlayers.get(loser) || 0) + 1)//loser
    }
    let noLost = []
    let oneLost = []

    for (const key of allPlayers.keys()) {
        if (!losers.has(key)) {
            noLost.push(key)
        }

        if (losers.get(key) === 1) {
            oneLost.push(key)
        }
    }

    let oneLostSorted = oneLost.sort((a, b) => { return a - b })
    let noLostSorted = noLost.sort((a, b) => { return a - b })

    return [noLostSorted, oneLostSorted]
};