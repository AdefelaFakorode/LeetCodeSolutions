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
 * @return {boolean}
 */
var isValidBST = function (root) {

    let dfs = (node, min, max) => {
        if (!node) {
            return true
        }

        if (node.val <= min || node.val >= max) {
            return false
        }

        //checking for left
        if (!dfs(node.left, min, node.val)) {
            return false
        }

        //checking for right
        if (!dfs(node.right, node.val, max)) {
            return false
        }

        return true

    }

    return dfs(root,-Infinity, Infinity)
};