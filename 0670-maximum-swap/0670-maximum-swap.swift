class Solution {
    func maximumSwap(_ num: Int) -> Int {
        var digits = String(num).map { Int(String($0))! }
        var sortedDigits = digits.sorted { $0 > $1 }
        print(digits)
        print(sortedDigits)
        var low = -1, high = -1
        for (i, digit) in digits.enumerated() {
            if low == -1 && high == -1 && digits[i] != sortedDigits[i] {
                low = digits[i]
                high = sortedDigits[i]
                digits[i] = high
                break
            } 
        }

        for j in (0..<digits.count).reversed() {
            if high == digits[j] {
                digits[j] = low
                break
            }
        }

        return Int(digits.map { String($0) }.joined())!
    }
}