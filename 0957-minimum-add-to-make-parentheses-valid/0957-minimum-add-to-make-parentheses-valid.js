/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let bracketCount = 0;
    let result = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] == "(") bracketCount++;
        else {
            if(bracketCount == 0) {
                result++;
            } else {
                bracketCount--;
            }
        }
    }    

    return result + Math.abs(bracketCount);
};