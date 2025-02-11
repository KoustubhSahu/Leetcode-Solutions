
var DetectSquares = function() {
    this.points = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    let curr = JSON.stringify(point);
    if (this.points.has(curr)) this.points.set(curr, this.points.get(curr)+1);
    else this.points.set(curr, 1);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    let count = 0;
    for (let [co, coFreq] of this.points) {
        co = JSON.parse(co);
        if (co[0] == point[0] && co[1]!=point[1]) {
            let diff = Math.abs(co[1] - point[1]);
            
            // - diff
            let check = point[0] - diff;
            let [p3, p4] = [JSON.stringify([check, point[1]]), JSON.stringify([check, co[1]])];
            if (this.points.has(p3) && this.points.has(p4)) {
                count += (coFreq * this.points.get(p3) * this.points.get(p4));
            }

            // + diff
            check = point[0] + diff;
            [p3, p4] = [JSON.stringify([check, point[1]]), JSON.stringify([check, co[1]])];
            if (this.points.has(p3) && this.points.has(p4)) {
                count += (coFreq * this.points.get(p3) * this.points.get(p4));
            }

        }   
    }
    return count;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */