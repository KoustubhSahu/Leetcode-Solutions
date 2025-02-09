/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let numMap = {"1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9};
    let result = 0;
    let negetive = false;
    let firstFound = false;
    for (let ch of s) {
        if (ch == " ") {
            if (firstFound) break;
            continue;
        }
        if (ch == "0") {
            result = result*10 + 0;
            firstFound = true;
        } else if (numMap[ch]) {
            result = result*10 + numMap[ch];
            firstFound = true;
        } else if (!firstFound && (ch == "-" || ch == "+")) {
            negetive = ch == "-" ? true : false;
            firstFound = true;
        } else {
            break;
        }
    }

    if (negetive) result *= -1;

    if (result < -2147483648) result = -2147483648;
    else if (result > 2147483647) result = 2147483647;

    return result;
};