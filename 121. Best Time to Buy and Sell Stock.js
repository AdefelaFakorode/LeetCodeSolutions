/**
 * @param {number[]} prices
 * @return {number}
 */

/*
[2,1,2,1,0,1,2]
   b s

ds: two ptrs
buy ptr
sell ptr


if(buy <= sell)
    sell++

else
    buy++
    sell++

let maxProfit = Math.max(maxProfit, arr[sell] - arr[buy])

*/

var maxProfit = function(prices) {
    let buy = 0
    let sell = 1
    let maxProfitGained = 0

    while(sell < prices.length){
        if(prices[buy] > prices[sell]){
            buy = sell
            sell++
        }
        if(prices[buy] <= prices[sell]){
             maxProfitGained = Math.max(maxProfitGained, prices[sell] - prices[buy])
            sell++
        }else{
            buy++
            sell++
        }
    }

    return maxProfitGained
};