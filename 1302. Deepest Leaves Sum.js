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
var deepestLeavesSum = function (root) {
    /*
    ds: BFS
    if(!root){
        return 0
    }

    let queue = [root]
    let ans = 0

    while(queue.length){ //iteration for each level
        let nextQueue = []
        ans = 0

        for(let i = 0; i < queue.length; i++){ //for each node
            let node = queue[i]
            ans += node.val

            if(node.left){
                nextQueue.push(node.left)
            }

            if(node.right){
                nextQueue.push(node.right)

            }
        }

        queue = nextQueue
    }

    return ans

    time comp = O(n) -> N being total number of nodes in the tree

    space comp = O(n) -> N being the max numebr of nodes in any level of the tree
    */

    if (!root) {
        return 0
    }

    let queue = [root]
    let ans = 0

    while (queue.length) { //iteration for each level
        let nextQueue = []
        ans = 0

        for (let i = 0; i < queue.length; i++) { //for each node in curr level
            let node = queue[i]
            ans += node.val

            if (node.left) {
                nextQueue.push(node.left)
            }

            if (node.right) {
                nextQueue.push(node.right)
            }


        }

        queue = nextQueue

    }

    return ans

};