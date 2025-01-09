class Solution {
    func maximumSwap(_ num: Int) -> Int {
        var digits = String(num).map { Int(String($0))! }
        var count = digits.count
        var rightMax = Array(repeating: -1, count: count)

        var currMaxInd = count - 1
        for i in (0..<digits.count).reversed() {
            if digits[i] > digits[currMaxInd] {
                currMaxInd = i
            } 
            rightMax[i] = currMaxInd
        }

        for i in 0..<count {
            var swapInd = rightMax[i]
            if digits[i] != digits[swapInd] {
                let temp = digits[i]
                digits[i] = digits[swapInd]
                digits[swapInd] = temp
                break
            }
        }

        return Int(digits.map { String($0) }.joined())!
    }
}