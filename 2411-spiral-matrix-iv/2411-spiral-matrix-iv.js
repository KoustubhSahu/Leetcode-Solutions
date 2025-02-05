/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    let arr = new Array(m).fill().map(() => new Array(n).fill(-1));
    let node = head;
    let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let d = 0;
    let [i, j] = [0, 0];
    
    while (node) {
        arr[i][j] = node.val;
        node = node.next;
        let [x, y] = [i+direction[d][0], j+direction[d][1]];
        
        if (x >= m || y >= n || x < 0 || y < 0 || arr[x][y] != -1) {
            d = (d+1)%4;
        }
        i += direction[d][0];
        j += direction[d][1]; 
    }
    return arr;
};