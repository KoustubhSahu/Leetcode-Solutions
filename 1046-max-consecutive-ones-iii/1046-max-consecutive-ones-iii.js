/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let [i, j] = [0, 0];
    let [queue, front] = [[], 0];
    let max = 0;

    while (j < nums.length) {
        if (nums[j] == 0) {
            queue.push(j);
            if (k==0) {
                i = queue[front] + 1;
                front++;
            } else {
                k--;
            }
        }
        max = Math.max(max, j-i+1);
        j++;
    }

    return max;
};