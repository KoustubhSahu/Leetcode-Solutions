/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let [len, toDel] = [0, 0];
    let prevNode;
    currNode = head;
    while (currNode) {
        currNode = currNode.next;
        len++;
    }
    toDel = len - n;
    if (toDel == 0) return head.next;
    currNode = head;
    while (toDel>=0) {
        if (toDel == 1) {
            prevNode = currNode;
        }
        else if (toDel == 0) {
            prevNode.next = currNode.next;
            break;
        }
        currNode = currNode.next;
        toDel--;
    }
    
    return head;
};