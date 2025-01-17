class Solution {
    func isToeplitzMatrix(_ matrix: [[Int]]) -> Bool {
        var map = [Int: Int]()

        for r in 0..<matrix.count {
            for c in 0..<matrix[0].count {
                let diag = c - r
                if let value = map[diag] {
                    if value != matrix[r][c] {
                        return false
                    } 
                } else {
                        map[diag] = matrix[r][c]
                    }
            }
        }
        return true
    }
}