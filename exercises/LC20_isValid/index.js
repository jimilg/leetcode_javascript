const isValid = s => {
    let stack = [];
    let pairHashmap = {"(": ")", "{": "}", "[": "]"};

    for (let index = 0; index < s.length; index++) {
        const char = s[index];

        if(pairHashmap[char]) {
            // if char is not } ) ]
            stack.push(char);

        } else if(pairHashmap[stack.pop()] !== char) {
            return false;
        }
        
    }
    return stack.length === 0;

};

module.exports = isValid;
