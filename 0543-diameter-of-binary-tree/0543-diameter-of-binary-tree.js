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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    traverse(root);
    return diameter;    

    function traverse(root) {
        if (root == null) return 0;

        let left = traverse(root.left);
        let right = traverse(root.right);

        diameter = Math.max(left+right, diameter);

        return Math.max(left, right) + 1
    }

};