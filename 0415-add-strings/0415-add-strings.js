/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0;
    let [i, j] = [num1.length-1, num2.length-1];
    let result = [];
    while (i>=0 || j>=0) {
        let currSum = carry;
        if (i>=0) {
            currSum += parseInt(num1[i])
        }
        if (j>=0) {
            currSum += parseInt(num2[j])
        }

        carry = parseInt(currSum/10);
        result.push(currSum%10);
        i--;
        j--;
    }

    if (carry == 1) result.push(1);

    return result.reverse().join("");
};