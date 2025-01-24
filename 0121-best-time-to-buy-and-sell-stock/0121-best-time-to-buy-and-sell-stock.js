/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [rightMax, maxProfit] = [prices.at(-1), 0];
    for (let i=prices.length-2; i>=0; i--) {
        if (prices[i] > rightMax) rightMax = prices[i];

        if (rightMax-prices[i] > maxProfit) maxProfit = rightMax-prices[i];
    }

    return maxProfit;
};