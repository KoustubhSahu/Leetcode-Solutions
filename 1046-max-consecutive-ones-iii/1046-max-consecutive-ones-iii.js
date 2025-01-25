/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let [i, j] = [0, 0];
    let max = 0;
    let zero = 0;
    while (j < nums.length) {
        if (nums[j] == 0) {
            zero++;
        }

        while (zero>k) {
            if (nums[i] == 0) {
                zero--;
            }
            i++;
        }

        let temp = j-i+1;
        max = max>temp ? max : temp;
        j++;
    }

    return max;
};