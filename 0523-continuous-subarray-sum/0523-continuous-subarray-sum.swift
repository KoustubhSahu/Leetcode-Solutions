class Solution {
    func checkSubarraySum(_ nums: [Int], _ k: Int) -> Bool {
        var remainders = [0: -1]

        var sum = 0
        for (i, num) in nums.enumerated() {
            sum += num
            let remainder = sum % k
            if let index = remainders[remainder] {
                if i - index >= 2 {
                    return true
                }
            } else{
                remainders[remainder] = i
            }
        }
        return false
    }
}