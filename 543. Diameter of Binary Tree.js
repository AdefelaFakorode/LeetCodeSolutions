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
ds: dfs

base cases
if node is null
    return 0



traverse thru the tree recurv
    left
    right

    if node children is null
    count++


return count
*/
var diameterOfBinaryTree = function (root) {
    let diameter = 0

    let dfs = (node) =>{
        if(!node){
            return 0
        }

        let left = dfs(node.left)
        let right = dfs(node.right)

        diameter = Math.max(diameter, left + right)

        if(!node.left && !node.right){
            return 1
        }

        return 1 + Math.max(left, right);
    }

    dfs(root)

    return diameter
};