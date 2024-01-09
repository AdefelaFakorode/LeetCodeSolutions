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
 ds: slow n fast ptrs
 inti f n s = head

 while f n fast next is not null
    s +1
    f +2

    return s.val
 */
    var middleNode = function(head) {
        let slow = head
        let fast = head
    
        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    };