/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    let visitedNode = new Map();
    let nodeCopy = new Node(node.val);
    visitedNode.set(node, nodeCopy);
    cloneNode(node, nodeCopy);
    return nodeCopy;

    function cloneNode(currNode, copyNode) {
        for (n of currNode.neighbors) {
            if (visitedNode.has(n)) {
                copyNode.neighbors.push(visitedNode.get(n));
            } else {
                let newNode = new Node(n.val);
                visitedNode.set(n, newNode);
                copyNode.neighbors.push(newNode);
                cloneNode(n, newNode);
            }
        }
    }
};