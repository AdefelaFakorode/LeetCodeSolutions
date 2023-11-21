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
 * @param {number} targetSum
 * @return {boolean}
 */

/*

var:
    represent current node
    represent current sum

Base Cases:

if root is null:
    return false;

if a node has no children:
    return currSum + node.val === targetSum

iteration:

left = go left
right = go right
return left or right

return dfs(root, 0) 

*/

var hasPathSum = function (root, targetSum) {
    let dfs = (node, currSum) => {
        //base cases

        if (!node) { // if root is null
            return false;
        }

        if (node.left == null && node.right == null) { // if not has no children
            return (currSum + node.val) === targetSum
        }
        currSum += node.val;
        let left = dfs(node.left, currSum);
        let right = dfs(node.right, currSum);
        return left || right;
    }

return dfs(root, 0);
};