/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 /*
 ds: LL
    prev
    curr
    nextNode


1    2 -> 3 -> 4 -> 5
P    C    N

let prev = null
let curr = head

while loop
    let nextNode = curr.next
    curr.next = prev
    prev = curr
    curr = nextNode


 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    
    while(curr){
        let nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }

    return prev
};