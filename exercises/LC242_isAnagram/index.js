function isAnagram(s, t) {

    if(s.length !== t.length) {
        return false;
    }
    const sChars = [];

    for (let index = 0; index < s.length; index++) {
        let tmp = s[index];
        sChars[tmp] = sChars[tmp] + 1 || 1;
    }

    for (let index = 0; index < t.length; index++) {
        const tchar = t[index];
        if(!sChars[tchar]) {
            return false;
        }
        sChars[tchar] = sChars[tchar] - 1;
        
    }
    return true;

}

module.exports = isAnagram;
