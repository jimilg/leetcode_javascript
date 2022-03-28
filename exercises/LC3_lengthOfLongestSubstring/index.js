// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
let wmap = {};
let wstart = 0;
let wmax = 0;
    for (let index = 0; index < s.length; index++) {
        const endChar = s[index];
        if(wmap[endChar] >= wstart) {
            wstart = wmap[endChar] + 1;
        }
        wmap[endChar] = i;
        wmax = Math.max(wmax, i - wstart + 1);
        
    }
    return wmax;
}

module.exports = lengthOfLongestSubstring;
