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
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    let pathNum = 0;

    function dfs (currNode, currPathNum) {
        if (currNode == null) return null;

        currPathNum = currPathNum*10 + currNode.val;
        let left = dfs(currNode.left, currPathNum);
        let right = dfs(currNode.right, currPathNum);

        if (left==null && right==null) {
            sum += currPathNum;
        }

        return currPathNum;
    }

    dfs(root, pathNum);

    return sum;
};