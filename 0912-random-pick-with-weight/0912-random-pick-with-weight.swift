
class Solution {
    var nums: [Int]
    var prefixSum: [Int]
    init(_ w: [Int]) {
        self.nums = w
        prefixSum = Array(repeating: nums[0], count: nums.count)
        for i in 1..<nums.count {
            prefixSum[i] = prefixSum[i-1] + nums[i]
        }
    }
    
    func pickIndex() -> Int {
        let random = Int.random(in: 0..<prefixSum[nums.count-1])

        var low = 0, high = nums.count

        while low <= high {
            let mid = (low + high) / 2

            if random < prefixSum[mid] {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }

        return low

    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution(w)
 * let ret_1: Int = obj.pickIndex()
 */