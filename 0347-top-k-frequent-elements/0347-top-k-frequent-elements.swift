class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        var freqMap = [Int: Int]()
        var mostFreq = [Int: [Int]]()
        var maxFreq = 0

        for num in nums {
            freqMap[num, default: 0] += 1
        }

        for (num, freq) in freqMap {
            mostFreq[freq, default: [Int]()].append(num)
            maxFreq = max(freq, maxFreq)
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