var maxProfit = function(prices) {
    let maxP = 0;
    let cheap = prices[0];

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        if(price < cheap) cheap = price;
        let tmpmaxP = price - cheap;
        maxP = Math.max(tmpmaxP, maxP);
    }
    return maxP;
};

module.exports = maxProfit;
