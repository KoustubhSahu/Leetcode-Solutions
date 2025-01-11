class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        var freq = [Int: Int]()
        var mostFreq = [Int: Set<Int>]()
        var maxFreq = 0

        for num in nums {
            freq[num, default: 0] += 1
            let currentFreq = freq[num]!
            maxFreq = max(maxFreq, currentFreq)
            if currentFreq > 1 {
                mostFreq[currentFreq - 1]!.remove(num)
            }
            mostFreq[currentFreq, default: Set<Int>()].insert(num)
        }

        var result = [Int]()
        while maxFreq > 0 && result.count < k {
            if let values = mostFreq[maxFreq] {
                result.append(contentsOf: values)
            }
            maxFreq -= 1
        }

        return Array(result.prefix(k))
    }
}