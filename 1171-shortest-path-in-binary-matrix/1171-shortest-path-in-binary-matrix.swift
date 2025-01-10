class Solution {
    func shortestPathBinaryMatrix(_ grid: [[Int]]) -> Int {
        var count = grid.count
        var visited = Array(repeating: Array(repeating: false, count: count), count: count)

        if grid[0][0] == 1 || grid[count-1][count-1] == 1 {
            return -1
        }

        let directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
        var queue = [(0, 0, 1)]
        visited[0][0] = true

        while !queue.isEmpty {
            var (row, col, steps) = queue.removeFirst()
            if row == count - 1 && col == count-1 {
                return steps
            }

            for direction in directions {
                let newRow = row + direction.0
                let newCol = col + direction.1

                if newRow >= 0 && newRow < count && newCol >= 0 && newCol < count && 
                grid[newRow][newCol] == 0 && !visited[newRow][newCol] {
                    visited[newRow][newCol] = true
                    queue.append((newRow, newCol, steps + 1))
                }
            }
        }

        return -1
    }
}