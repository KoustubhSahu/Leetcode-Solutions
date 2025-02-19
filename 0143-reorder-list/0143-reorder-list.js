/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    node = head;
    let i = 0;
    let nodeMap = {};
    while (node) {
        nodeMap[i++] = node;
        node = node.next;
    }
    j = i-1;
    i = 0;
    let newNode = new ListNode();
    node = newNode;
    while (i <= j) {
        node.next = nodeMap[i++];
        node = node.next;
        node.next = nodeMap[j--];
        node = node.next;
    }
    node.next = null;

    return newNode.next;
};