function coinChange(coins, amount) {

    // Look for sum of elements = amount then return number of coin else -1

    // let create DP array
    let dpMinCoins = new Array(amount + 1).fill(Infinity); // since array index start with zero, make sure to add +1
    dpMinCoins[0] = 0;

    for (let i = 1; i < dpMinCoins.length; i++) { // i is amout
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            if(coin <= i) { // i is amount here less than coin
                dpMinCoins[i] = Math.min(dpMinCoins[i - coin] + 1, dpMinCoins[i]);
            }
            
        }
        
    }

    const ans = dpMinCoins[dpMinCoins.length - 1];
    return ans === Infinity ? -1 : ans;


}

module.exports = coinChange;
