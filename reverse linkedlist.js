/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head 
    let temp = null
    while (curr !== null){
        next = curr.next
        curr.next = temp
        temp = curr
        curr = next
    }
    return temp
};
