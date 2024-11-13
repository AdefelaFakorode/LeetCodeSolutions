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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    /*
    ds: BFS

    time complexity: O(n) -> because you traverse thru each node once, you never go back to it...n is the number of nodes
    space complexity: O(n) -> n being the max number of nodes
    
    */
    if(!root){
        return 0
    }

    let queue = [root]
    let ans = 0

    while(queue.length){ // iter thru each level
        let nextQueue = []

        for(let i = 0; i < queue.length; i++){ //iter thru each node
            let node = queue[i]

            if(node.val >= low && node.val <= high){
                ans += node.val
            }

            if(node.left){
                nextQueue.push(node.left)
            }

            if(node.right){
                nextQueue.push(node.right)
            }
        }
        queue =  nextQueue
    }

    return ans
};