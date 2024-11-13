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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    if (!root) {
        return []
    }

    let queue = [root]
    let ans = []

    while (queue.length) { //iter thru each level
        let nextQueue = []
        let level = []

        for (let i = 0; i < queue.length; i++) { // iter thru each node
            let node = queue[i]
            level.push(node.val)

            if (node.left) {
                nextQueue.push(node.left)
            }

            if (node.right){
                nextQueue.push(node.right)
            }
        }

        ans.push(level)
        queue = nextQueue

    }

    for(let i = 1; i < ans.length; i += 2){
        ans[i].reverse();
    }

    return ans
};