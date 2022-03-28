// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {
    let numVisitedHash = {}; // {2:0, 7:1}
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        let complement = target - num;

        if(numVisitedHash[complement] !== undefined) {
            result.push(numVisitedHash[complement]);
            result.push(i);
        }
        numVisitedHash[num] = i; // store index
    }
    return result;
}

module.exports = twoSum;
