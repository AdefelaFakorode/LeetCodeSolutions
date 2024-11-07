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
var maxAncestorDiff = function(root) {
    /*
    ds: dfs
    maxDifference = 0

    dfs(node, currNodeVal)

    if(no root)
        return 0

        traverse
        left = dfs(node.left, node.val -)
        right = dfs(node.right, node.val)
    */

    let result = 0
    let dfs = (node, currMax, currMin) =>{
        if(!node){
            return
        }

        result = Math.max(result, Math.abs(currMax - node.val), Math.abs(currMin - node.val))
        
        currMax = Math.max(currMax, node.val)
        currMin = Math.min(currMin, node.val)
        dfs(node.left, currMax, currMin)
        dfs(node.right, currMax, currMin)
    }
    dfs(root,root.val, root.val)
    return result
};