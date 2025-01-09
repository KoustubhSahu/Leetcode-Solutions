class Solution {
    func minRemoveToMakeValid(_ s: String) -> String {
        var letters = Array(s)
        var stack = [Int]()

        for i in 0..<letters.count {
            if letters[i] == "(" {
                stack.append(i)
            } else {
                if letters[i].isLetter { continue }
                if stack.isEmpty { 
                    letters[i] = "#"
                    continue
                 }
                stack.removeLast()
            }
        }

        while !stack.isEmpty {
            letters[stack.removeLast()] = "#"
        }

        return String(letters.filter { $0 != "#" })
    }
}