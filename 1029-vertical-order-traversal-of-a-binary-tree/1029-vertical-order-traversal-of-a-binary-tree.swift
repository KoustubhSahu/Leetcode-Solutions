/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func verticalTraversal(_ root: TreeNode?) -> [[Int]] {
        var temp = [Int]()
        var map = [Int: [(Int, Int)]]()
        traverse(root, 0, 0, &temp, &map)

        let sortedKeys = map.keys.sorted { $0 < $1 }
        var result = [[Int]]()
        for key in sortedKeys {
            if let values = map[key] {
                result.append(values.sorted { $0.0 == $1.0 ? $0.1 < $1.1 : $0.0 < $1.0 }.map { $0.1 })
            }
        }

        return result
    }

    func traverse(_ root: TreeNode?, _ level: Int, _ height: Int, _ temp: inout [Int], _ map: inout [Int: [(Int, Int)]]) {
        guard let root = root else { return }

        if  map[level] == nil {
            map[level] = [(Int, Int)]()
        }
        map[level]!.append((height, root.val))

        traverse(root.left, level - 1, height + 1, &temp, &map)
        traverse(root.right, level + 1, height + 1, &temp, &map)
    }
}