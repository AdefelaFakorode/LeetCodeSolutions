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
ds: LinkedList
    find middle of LL -> f n s ptrs
        init fast = head
        inti slow = head
        inti prev node
            starts before orgin head
            prev.next = head
    while fast n fast.next != null
        fast = fast.next.next
        slow = slow.next
        prev = prev.next

        if(fast.next.next == null)
            prev.next = slow.next

            return head
*/

var deleteMiddle = function (head) {
    let prev = new ListNode(0)
    prev.next = head
    let fast = head
    let slow = head

    if( head == null || head.next === null){
        return null
    }

    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        prev = prev.next
    }

    // Check if fast.next is null (even nodes)
    if (fast === null) {
        prev.next = prev.next.next;
    } else {
        // Odd nodes, skip the middle node
        prev.next = slow.next;
    }
    return head
};