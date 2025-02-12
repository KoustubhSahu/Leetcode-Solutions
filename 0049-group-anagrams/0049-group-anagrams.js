/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = {};

    for (let str of strs) {
        let sort = new Array(26).fill(0);
        for (let c of str) {
            sort[c.charCodeAt(0)-97]++;
        }
        sort = sort.join(",");
        
        if (!anagrams[sort]) anagrams[sort] = [];
        anagrams[sort].push(str); 
    }

    return Object.values(anagrams);
};