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
    func rightSideView(_ root: TreeNode?) -> [Int] {
        var result = [Int]()
        traverse(root, 0, &result)
        return result
    }

    func traverse(_ root: TreeNode?, _ level: Int, _ result: inout [Int]) {
        guard let root = root else { return } 
        
        if result.count == level {
            result.append(root.val)
        }

        traverse(root.right, level + 1, &result)
        traverse(root.left, level + 1, &result)
    }
}