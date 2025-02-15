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
 */
var BSTIterator = function(root) {
    this.nextStack = [];
    while (root) {
        this.nextStack.push(root);
        root = root.left;
    }
};


/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let node = this.nextStack.pop();

    let nextNode = node.right;
    while (nextNode) {
        this.nextStack.push(nextNode);
        nextNode = nextNode.left;
    }
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.nextStack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */