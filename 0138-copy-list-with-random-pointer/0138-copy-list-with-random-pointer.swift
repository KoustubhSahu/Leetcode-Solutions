/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var next: Node?
 *     public var random: Node?
 *     public init(_ val: Int) { 
 *         self.val = val
 *         self.next = nil
 *    	   self.random = nil
 *     }
 * }
 */

class Solution {
    func copyRandomList(_ head: Node?) -> Node? {
        var copyHead = Node(-1)
        var map = [Node?: Node?]()
        var current = head
        var copyCurrent: Node? = copyHead
        while current != nil {
            var newNode: Node? = Node(current!.val)
            copyCurrent?.next = newNode
            map[current] = newNode
            
            copyCurrent = copyCurrent?.next
            current = current?.next
        }

        current = head
        copyCurrent = copyHead.next
        while current != nil {
            if let random = map[current?.random] {
                copyCurrent?.random = random
            }
            copyCurrent = copyCurrent?.next
            current = current?.next 
        }

        return copyHead.next
    }
}