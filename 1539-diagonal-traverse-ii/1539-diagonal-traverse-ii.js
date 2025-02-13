/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let diagonals = [];

    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<nums[i].length; j++) {
            let dig = i+j;
            if (dig==diagonals.length) diagonals.push([]);
            diagonals[dig].push(nums[i][j]);
        }
    }

    let result = [];
    for (let diagonal of diagonals) {
        result.push(...diagonal.reverse());
    }

    return result;
};