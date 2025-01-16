
class Solution {
    var nums: [Int]
    var sum = 0
    init(_ w: [Int]) {
        var w = w
        for i in 1..<w.count {
            w[i] += w[i-1]
        }
        nums = w
        sum = nums[w.count-1]
    }
    
    func pickIndex() -> Int {
        let random = Int.random(in: 0..<sum)

        var low = 0, high = nums.count - 1

        while low <= high {
            let mid = (low + high) / 2

            if random < nums[mid] {
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