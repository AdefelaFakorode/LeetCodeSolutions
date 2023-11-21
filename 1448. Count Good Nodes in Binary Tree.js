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

/*

vars:
function dfs (node, maxSoFar) -> traverse thru tree

maxSoFar -> holding last largest node value

numGoodNodes = 0

left -> checking max 
right -> checking max 

if(node.val >= maxSoFar)  -> numGoodNodes++


return dfs(root, float("-inf"))
 */

var goodNodes = function(root) {
    var dfs = (node, maxSoFar) =>{
        if(!node){
            return 0;
        }

        let left = dfs(node.left, Math.max(maxSoFar, node.val))
        let right = dfs(node.right, Math.max(maxSoFar, node.val))
        let numGoodNodes = left + right
        if(node.val >= maxSoFar){
            numGoodNodes++
        }
        return numGoodNodes
    }
    return dfs(root, -Infinity);
};