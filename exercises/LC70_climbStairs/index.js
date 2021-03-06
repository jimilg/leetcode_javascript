const climbStairs = n => {
    if(n < 3) return n;
    let ways = [0, 1, 2, 3];

    for (let index = 4; index <= n; index++) {
        ways.push(ways[index-1] + ways[index-2]);
        
    }
    return ways[n];
};

module.exports = climbStairs;
