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
    let visited = new Set();
    visitedNode.set(node, nodeCopy);

    bfs(node, nodeCopy);
    return nodeCopy;


    function bfs(currNode, copyNode) {
        for (n of currNode.neighbors) {
            if (visitedNode.has(n)) {
                copyNode.neighbors.push(visitedNode.get(n));
            } else {
                let newNode = new Node(n.val);
                visitedNode.set(n, newNode);
                copyNode.neighbors.push(newNode);
            }
        }
        visited.add(currNode);
        console.log(`${copyNode.val} -> ${copyNode.neighbors.map((a) => a.val)}`);
        for (n of currNode.neighbors) {
            if (!visited.has(n)) {
                bfs(n, visitedNode.get(n));
            }
        }
    }

    function dfs(currNode, copyNode) {
        for (n of currNode.neighbors) {
            if (visitedNode.has(n)) {
                copyNode.neighbors.push(visitedNode.get(n));
            } else {
                let newNode = new Node(n.val);
                visitedNode.set(n, newNode);
                copyNode.neighbors.push(newNode);
                dfs(n, newNode);
            }
        }
    }
};