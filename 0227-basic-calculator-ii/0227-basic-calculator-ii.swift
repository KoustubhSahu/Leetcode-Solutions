class Solution {
    func calculate(_ s: String) -> Int {
        var stack = [Int]()
        var currentNumber = 0
        var lastOperation: Character = "+"
        let temp = s + "+"
        for ch in temp {
            if ch.isNumber {
                currentNumber = currentNumber * 10 + Int(String(ch))!
            } else {
                if ch.isWhitespace { continue }
                if lastOperation == "+" {
                    stack.append(currentNumber)
                } else if lastOperation == "-" {
                    stack.append(-currentNumber)
                } else if lastOperation == "*" {
                    stack.append(stack.removeLast() * currentNumber)
                } else {
                    stack.append(stack.removeLast() / currentNumber)
                }

                lastOperation = ch
                currentNumber = 0
            }
        }

        return stack.reduce(0, +)
    }
}