/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let trailing = 0;
    for (let d of data) {
        // let b = getByte(d);
        if (trailing == 0) {
            if (d >> 7 == 0b0) {
                continue;
            } else if (d>>3 == 0b11110) {
                trailing = 3;
            } else if (d>>4 == 0b1110) {
                trailing = 2;
            } else if (d>>5 == 0b110) {
                trailing = 1;
            } else {
                return false
            }

        } else {
            if (d >> 6 == 0b10) trailing--;
            else return false;
        }
    }

    return trailing==0;
};