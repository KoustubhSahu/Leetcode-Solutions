/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    let map = {};
    nums.forEach((value, index) => {
        if (map[value] == undefined) {
            map[value] = [index];
        } else {
            map[value].push(index);
        }
    });
    this.map = map;
};


/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let map = this.map;
    let returnIndex = Math.floor(Math.random() * map[target].length);
    return map[target][returnIndex]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */