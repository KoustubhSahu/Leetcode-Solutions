/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLength = 0;
    let zero = 0;
    let left = 0;
    let right = 0;

    while(right < nums.length) {
        if(nums[right] == 0)
            zero++;

        if(zero > k) {
            if(nums[left] == 0)
                zero--;
            left++;
        }

        if(zero <= k){
            let length = right - left + 1;
            if(length > maxLength)
                maxLength = length;
        }

        right++
    }
    return maxLength;
    
};