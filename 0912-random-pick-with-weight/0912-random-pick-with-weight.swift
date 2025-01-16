
class Solution {
    var nums: [Int]
    var prefixSum = [Int]()
    var sum = 0
    init(_ w: [Int]) {
        self.nums = w
        for num in nums {
            sum += num
            prefixSum.append(sum)
        }
    }
    
    func pickIndex() -> Int {
        let random = Int.random(in: 0..<sum)

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