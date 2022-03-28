const productExceptSelf = nums => {
    let op = nums.map(n=> 1);
    let product = 1;
    // Multiple from left
    for (let i = 0; i < nums.length; i++) {
        op[i] = op[i] * product;
        product = product * nums[i];
        
    }
    product = 1;
    // Multiply from right
    for (let j = nums.length -1; j >= 0; j--) {
        op[j] = op[j] * product;
        product = product * nums[j];
    }
    return op;
};

productExceptSelf([1,2,3,4])

module.exports = productExceptSelf;
