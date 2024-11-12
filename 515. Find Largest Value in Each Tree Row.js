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
var largestValues = function (root) {
    /*
    ds: BFS

    let queue = [root]
    let ans = []

    let currMax = -Infinity
    if(!root){
        return []
    }

    while(queue.length){
        let nextQueue = []   
    }

        for(iter thru curr queue length)
        currMax = Math.max(currMax, queue[i])

            if(node left)
                nextQueue.push(node left)

            if(node right)
                nextQueue.push(node right)

        queue = nextQueue
        ans.push(currMax)
        currMax = -Infinity
    }

return ans
    */

    if (!root) {
        return []
    }

    let queue = [root]
    let ans = []

    while (queue.length) { //each iteration of the while loop is handling each level

        let nextQueue = []
        let currMax = -Infinity //stores largest val for curr level

        for (let i = 0; i < queue.length; i++) { //for each node
            let node = queue[i]
            currMax = Math.max(currMax, node.val)

            if (node.left)
                nextQueue.push(node.left)

            if (node.right)
                nextQueue.push(node.right)
        }

        ans.push(currMax)
        queue = nextQueue
    }

    return ans

};