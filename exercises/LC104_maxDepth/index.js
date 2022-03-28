function maxDepth(root) {
    let max = 0;
    function dive(node, currentDepth) {
        if(!node) {
            max = Math.max(currentDepth - 1, max);
            return;
        }
        dive(node.left, currentDepth + 1)
        dive(node.right, currentDepth + 1)
    }
    dive(root, 1);
    return max;
}

module.exports = maxDepth;
