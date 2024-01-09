/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 /*
 ds: set
 
 while(head null)
 in each iter:
 see if set.has(head){
     return true
 }

 add to set
 head = head.next

 return false
 
 */
 var hasCycle = function(head) {
    let set = new Set();
    
    while(head != null){
        if(set.has(head)){
            return true
        }

        set.add(head)
        head = head.next
    }
    return false
};