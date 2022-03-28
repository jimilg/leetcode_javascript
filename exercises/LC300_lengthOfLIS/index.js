function lengthOfLIS(nums) {
    if(nums.length ===0) return 0;

    let dpsubseq = new Array(nums.length).fill(1);
    let maxSoFar = 1;

    for (let j = 0; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if(nums[j] > nums [i]) {
                dpsubseq[j] = Math.max(dpsubseq[i] + 1, dpsubseq[j])
            }
        }
        maxSoFar = Math.max(maxSoFar, dpsubseq[j]);
        
    }
    return maxSoFar;

}

module.exports = lengthOfLIS;
