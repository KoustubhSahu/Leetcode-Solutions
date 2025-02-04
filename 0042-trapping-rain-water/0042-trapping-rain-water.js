/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let [l, r] = [0, height.length-1];
    let [lMax, rMax] = [height[l], height[r]]
    let water = 0;
    while (l<=r) {
        let currWater = 0;
        if (lMax < rMax) {
            currWater = lMax - height[l];
            if (currWater > 0) water += currWater;
            lMax = Math.max(lMax, height[l]);
            l++
        } else {
            currWater = rMax - height[r];
            if (currWater > 0) water += currWater;
            rMax = Math.max(rMax, height[r]);
            r--;
        }
    }

    return water;
};