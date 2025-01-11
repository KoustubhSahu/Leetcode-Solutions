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
        while result.count < k {
            if let arry = mostFreq[maxFreq] {
                result += arry
            }
            maxFreq -= 1
        }

        return Array(result.prefix(k))
    }
}