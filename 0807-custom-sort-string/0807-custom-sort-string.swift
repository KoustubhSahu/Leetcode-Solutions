class Solution {
    func customSortString(_ order: String, _ s: String) -> String {
        var orderMap = [Character: Int]()
        var priorityMap = [Int: [Character]]()

        for (i, ch) in order.enumerated() {
            orderMap[ch] = i
        }

        for (i, ch) in s.enumerated() {
            if let currentOrder = orderMap[ch] {
                priorityMap[currentOrder, default: [Character]()].append(ch)
            } else {
                priorityMap[-1, default: [Character]()].append(ch)
            }
        }

        var result = ""
        for i in -1..<order.count {
            if let current = priorityMap[i] {
                result += String(current)
            }
        }

        return result
    }
}