class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        var sortedIntervals = intervals.sorted { $0[0] < $1[0] }
        
        var mergeIntervals = [[Int]]()
        var current = sortedIntervals[0]
        for i in 1..<intervals.count {
            if current[1] >= sortedIntervals[i][0] {
                current[0] = current[0]
                current[1] = max(current[1], sortedIntervals[i][1])
            } else {
                mergeIntervals.append(current)
                current = sortedIntervals[i]
            }
        }
        mergeIntervals.append(current)
        return mergeIntervals
    }
}