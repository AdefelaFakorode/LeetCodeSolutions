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
var getMinimumDifference = function(root) {
    /*
    ds: DFS

    time complexity: O(n) = n being the amount of nodes and only iter thru them once
    space complexity: O(n) = being the max height of levels 
    */

    let arr = []
    let ans = Infinity
    let dfs = (node) =>{

        if(!node){
            return 0
        }

        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    
    dfs(root)

    for(let i = 0; i < arr.length; i++){
        if(arr[i+1]){
            ans = Math.min(ans, Math.abs(arr[i] - arr[i+1]))
        } 
    }


    return ans
};