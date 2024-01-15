/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
ds: LinkedList
    f n s ptrs

edge case:
if no head || head.next
    return null

init dummy node
    val = =
    dummy.next = head

init f&s pts
first = dummy
second  = dummy


inter thru n times
    second = second.next

then move f % s ptrs till second.next is null
    first = first.next
    second = second.next

then delete node
first.next = fist.next.next

*/

var removeNthFromEnd = function(head, n) {
    //edge case
    if(!head || !head.next){
        return null
    }
    //init dummy node
    let dummy = new ListNode(0);
    dummy.next = head

    //init first & sec ptrs
    let first = dummy
    let second = dummy

    //iter thru n times
    for(let i = 0; i < n; i++){
        second = second.next
    }

    // then move f n s ptrs till second.next is null
    while(second.next != null){
        first = first.next
        second = second.next
    }

    //delete node
    first.next = first.next.next
     
    return dummy.next
};