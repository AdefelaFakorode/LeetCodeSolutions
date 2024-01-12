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
ds: Linked List 

init dummy node
 d.next = head

pointer = dummy

while(p.next != n p.n.next != null)
s1 = p.next
s2 = p.next.next

s1.next = s2.next
s2.next = s1
dummy.next = s2

point.next = s1

return d.next --> the head

*/

//creating dummy node
let dummy = new ListNode(0)

var swapPairs = function (head) {
    //edge case, if LinkedList has 2 nodes...just return
    if(!head || !head.next){
        return head
    }


    //dummy nodes next is the head
    dummy.next = head
    let p = dummy //temp var that will move thru the linked list

    while (p.next != null && p.next.next) {
        //init nodes to be swapped ---> swap1 n swap2
        let s1 = p.next
        let s2 = p.next.next

        //swap happens
        s1.next = s2.next
        s2.next = s1

        p.next = s2 //updating new head
        p = s1 //updating starting point
    }
    //returning the head
    return dummy.next
};