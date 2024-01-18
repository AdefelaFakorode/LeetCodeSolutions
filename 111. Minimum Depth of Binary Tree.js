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
ds: b-tree

starting FROM the root

find min depth:
    search till find no children

init recurive funtion
    params(node, min)

    if(!node){
        return 0
    }
    
    if(node.left === null && node.right === null){
        return 1
    }

    left = node.left
    right...
    return Math.min(left,right) + 1 
*/

var minDepth = function(root) {
    //case: no root
    if(!root){
        return 0
    }

    //case: no children
    if(root.left === null && root.right === null){
        return 1
    }

    let left = minDepth(root.left)
    let  right = minDepth(root.right)

    //case: only one child
    if(root.left === null || root.right === null){
        return left + right + 1
    }

    return Math.min(left, right) + 1
};