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
 * @return {number[]}
 */
var rightSideView = function(root) {
    /*
    ds: bfs

    if(!root){
        return []
    }

    while(queue.length)
    let nextQueue = []
    let ans = []

    for(i=0; i < queue.length; i++)

        let node = queue[i]
        ans.push(queue[queue.length - 1])

        if(node left)
            nextQueue.push(node left)

        if(node right)
            nextQueue.push(node right)

     queue = nextQueue
        
    */

    if (!root) {
        return [];
    }

    let queue = [root]
    let ans = []

    while(queue.length){
        let nextQueue = []

        ans.push(queue[queue.length - 1].val)

        for(let i = 0; i < queue.length; i++){
            let node = queue[i]

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
};