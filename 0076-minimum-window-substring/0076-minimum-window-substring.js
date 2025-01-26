/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let needChar = {};
    let needLength = t.length;
    let windowLength = Infinity;
    let start = 0;
    let windowStart = 0;

    for (let ch of t) {
        needChar[ch] = needChar[ch] ? needChar[ch]+1 : 1
    }

    for (let end=0; end<s.length; end++) {
        if (needChar[s[end]]-- > 0) needLength --;

        while (needLength == 0) {
            if (windowLength > end-start+1) {
                windowStart = start;
                windowLength = end-start+1;
            }

            if (needChar[s[start++]]++ == 0) needLength++;
        }
    }

    return windowLength==Infinity ? "" : s.slice(windowStart, windowStart+windowLength);
};