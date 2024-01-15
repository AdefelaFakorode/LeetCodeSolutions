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
ds:LL
init dummy node
   val = 0
   d.next = head.next

init ptr1 = dummy
init ptr2 = dummy.next
 
while(ptr2.next ! = null){
   if(ptr1.val != ptr2.val){
       ptr1 = ptr1.next
       ptr2 = ptr2.next
   }else{
       ptr1 = ptr1.next
       ptr2 = ptr2.next.next
   }
}
return head

*/
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0)
    dummy.next = head

    let ptr1 = dummy
    let ptr2 = dummy.next

    while (ptr2 != null && ptr2.next != null) {
        if (ptr1.next.val !== ptr2.next.val) {
            ptr1 = ptr1.next
            ptr2 = ptr2.next
        } else {
            while (ptr2.next != null && ptr1.next.val === ptr2.next.val) {
                ptr2 = ptr2.next
            }
            ptr1.next = ptr2.next;
            ptr2 = ptr2.next;
        }
    }

    return dummy.next
};