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
var middleNode = function(head) {

    let size = 0;
    let curr = head
    while (curr){
        size++
        curr = curr.next
    }
    let middle = Math.floor(size/2) 
    for(let i = 0; i < middle; i++){
        head = head.next
    }
    return head
};
