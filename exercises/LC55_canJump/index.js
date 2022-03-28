function canJump(nums) {
    let doPositions = new Array(nums.length).fill(false);
    doPositions[0] = true; // set first element to true
    // i = 0, j = i+1;
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if(doPositions[i] && i + nums[i] >= j) {
                doPositions[j] = true;
            }
            
        }
        
    }
    return doPositions[doPositions.length -1];
}

canJump([2, 3, 1, 1, 4]);

module.exports = canJump;
