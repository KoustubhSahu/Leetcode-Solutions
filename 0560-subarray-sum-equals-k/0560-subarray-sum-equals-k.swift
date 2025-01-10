class Solution {
    func subarraySum(_ nums: [Int], _ k: Int) -> Int {
        var map = [0: 1]
        var sum = 0, count = 0

        for num in nums {
            sum += num

            if let value = map[sum - k] {
                count += value
            }
            map[sum, default: 0] += 1
        }
        return count
    }
}