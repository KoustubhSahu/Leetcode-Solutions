/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if (s == "") return false;
    s = s.toLowerCase();
    if (s[0] == "e" || s[s.length-1] == "e") return false;
    let arr = s.split("e");
    if (arr.length>2) return false;

    if (!isValid(arr[0], true)) {
        return false
    }

    if (arr.length == 2) {
        return isValid(arr[1], false)
    }

    return true

    function isValid(str, allowDecimal) {
        // if s.isEmpty { return false }

        let hasNumber = false
        let hasDecimal = false
        console.log(str);    
        for (let i=0; i<str.length; i++) {
            
            let ch = str[i]
            if (ch == "+" || ch == "-") {
                if (i != 0) { return false } 
            } else if (ch == ".") {
                if (!allowDecimal || hasDecimal) { return false }
                hasDecimal = true
            } else if (isNaN(Number(ch))) {
                return false
            } else {
                hasNumber = true
            }
        }
        return hasNumber
    }
};