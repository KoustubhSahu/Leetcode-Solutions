/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [root];
    let front = 0;
    return bfs(root);
    
    function bfs() {
        let node;
        while (front < queue.length) {
            node = queue[front];
            front++;

            if (node==null) {
                continue;
            }
            
            if (validCheck(node.left)) queue.push(node.left);
            else return false;

            if (validCheck(node.right)) queue.push(node.right);
            else return false;
        }
        return true;
        
    }

    function validCheck(checkNode) {
        if (checkNode==null) return true;
        if (queue.at(-1)==null) return false;
        return true;
    }
};