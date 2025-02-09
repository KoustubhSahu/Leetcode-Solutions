/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// var canConstruct = function(s, k) {
//     if (k > s.length) return false;
//     let oddSet = new Set();
//     for (let ch of s) {
//         if (oddSet.has(ch)) oddSet.delete(ch);
//         else oddSet.add(ch);
//     }

//     return oddSet.size<=k;
// };

var canConstruct = function(s, k) {
    if (k > s.length) return false;
    let map = {};
    for (let ch of s) {
        if (!map[ch]) map[ch] = 0;
        map[ch]++
    }

    for (let key in map) {
        if (map[key]%2 == 1) {
            k--;
            if (k<0) return false;
        }
    }
    return true;
};