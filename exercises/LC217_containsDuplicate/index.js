const containsDuplicate = nums => {
    if(nums.length === 0) return false;

    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
            if(hash[nums[i]] > 1) {
                return true;
            }
        }
    }
    return false;
};

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

module.exports = containsDuplicate;
