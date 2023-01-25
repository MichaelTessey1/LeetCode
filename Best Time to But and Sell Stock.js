var maxProfit = function(prices) {
    // checks for the biggest profit
    let currMax = 0;
    // checks for the lowest price in the stock prices
    let currLow = prices[0];

    for(let i = 0; i < prices.length; i++) {
        // updates the lowest price in the stock prices
        if (prices[i] < currLow) {
            currLow = prices[i]
        }
        // checks for the profit and updates if its greater than previous profits
        if((prices[i] - currLow) > currMax) {
            currMax = prices[i] - currLow
        }
    }

    // returns the greatest profit
    return currMax
};
