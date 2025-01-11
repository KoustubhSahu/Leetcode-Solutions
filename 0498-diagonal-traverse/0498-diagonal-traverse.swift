class Solution {
    func findDiagonalOrder(_ mat: [[Int]]) -> [Int] {
        var result = [[Int]]()

        for row in 0..<mat.count {
            for col in 0..<mat[0].count {
                let diag = row + col
                if result.count == diag {
                    result.append([Int]())
                }
                result[diag].append(mat[row][col])
            } 
        }

        return result.enumerated().flatMap { (index, values) in
            return index % 2 == 1 ? values : values.reversed()
        }
    }
}