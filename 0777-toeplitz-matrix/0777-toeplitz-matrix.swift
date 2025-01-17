class Solution {
    func isToeplitzMatrix(_ matrix: [[Int]]) -> Bool {
        for r in 1..<matrix.count {
            for c in 1..<matrix[0].count {
                if matrix[r][c] != matrix[r-1][c-1] { return false }
            }
        }
        return true
    }
}