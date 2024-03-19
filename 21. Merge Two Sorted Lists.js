/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
ds: LinkedList
    think like a normal array
        where we compare elements in arr1 n arr2
        and append to new arr 1 by 1...
        then make sure both arr1 and arr2 are empty

init new dummy node

let tail = dummy 

while l1 and l2 exist
    compare l1 < l2
        push l1

    else
    push l2

if l1 exist
    push l1

elseif l2 exist
    push l2
*/

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0)
    curr = dummy

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1
            list1 = list1.next
        }

        else{
            curr.next = list2
            list2 = list2.next
        }

        curr = curr.next
    }

    if(list1){
        curr.next = list1
    }

    else if(list2){
        curr.next = list2
    }

    return dummy.next

};