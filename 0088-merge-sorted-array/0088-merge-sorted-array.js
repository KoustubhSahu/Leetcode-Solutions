/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    [i, j] = [0, 0] 
    nums3 = []

    while(i<m && j<n) {
        if (nums1[i] >= nums2[j]){
            nums3.push(nums2[j]);
            j++;
        }
        else {
            nums3.push(nums1[i]);
            i++;
        }
    }

    for (let k=i; k<m; k++) {
        nums3.push(nums1[k]);
    }
    for (let k=j; k<n; k++) {
        nums3.push(nums2[k]);
    }

    for (let k=0; k<m+n; k++) {
        nums1[k] = nums3[k];
    }

};