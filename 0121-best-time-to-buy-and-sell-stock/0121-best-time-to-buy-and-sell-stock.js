/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [rightMax, maxProfit] = [prices.at(-1), 0];
    
    for (let i=prices.length-2; i>=0; i--) {
        rightMax = Math.max(rightMax, prices[i]);
        maxProfit = Math.max(maxProfit, rightMax-prices[i]);
    }

    return maxProfit;
};