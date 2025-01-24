/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [rightMax, maxProfit] = [prices.at(-1), 0];
    prices = prices.reverse();
    for (let price of prices) {
        rightMax = Math.max(rightMax, price);
        maxProfit = Math.max(maxProfit, rightMax-price);
    }

    return maxProfit;
};