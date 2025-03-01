/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let [A, B] = [nums1, nums2];
    if (nums1.length > nums2.length) [A, B] = [nums2, nums1];

    if (A.length === 0) return getMedian(B);
    else if (B.length === 0) return getMedian(A);

    let [median, pA, pB] = [0, 0, 0];
    let mid = parseInt((A.length + B.length + 1)/2);
    let isEven = (A.length + B.length)%2 == 0;
    let [l, r] = [0, A.length];
    while (l <= r) {
        pA = parseInt((l+r)/2);
        pB = mid - pA;

        let Aleft = pA == 0 ? -Infinity : A[pA-1];
        let Aright = pA == A.length ? Infinity : A[pA];
        let Bleft = pB == 0 ? -Infinity : B[pB-1];
        let Bright = pB == B.length ? Infinity : B[pB];

        if (Aleft > Bright) {
            r = pA - 1;
        } else if (Bleft > Aright) {
            l = pA + 1;
        } else {
            if (isEven) {
                median = (Math.max(Aleft, Bleft) + Math.min(Aright, Bright))/2; 
            } else {
                median  = Math.max(Aleft, Bleft);
            }
            return median;
        }
    }
    
};

function getMedian(arr) {
    let median;
    let m = parseInt(arr.length/2);
    if (arr.length%2 === 0) {
        median = (arr[m] + arr[m-1])/2;
    } else {
        median = arr[m];
    }
    return median;
} 
