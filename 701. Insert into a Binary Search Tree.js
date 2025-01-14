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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    /*
        use DFS

        dfs(node, val)

        if node doesnt exist
            return new TreeNode(val)


        traverse thru the tree
            if val > node.val
                go to the right node

            else
                go to the left node


        return dfs(root,val)


        h = height of the tree
        h = n

        IF BALANCED
        time comp: O(log n)
        space comp: O(log n)

        IF NOT BALANCED
        time comp: O(n)
        space comp: O(n)

    */

    let dfs = (node, val) => {

        if (!node) {
            return new TreeNode(val)
        }
        if (val > node.val) {
            node.right = dfs(node.right, val)
        }

        else {
            node.left = dfs(node.left, val)
        }

        return node
    }

    return dfs(root, val)

};