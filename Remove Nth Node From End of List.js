/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let size = 0 
    let curr = head

    while (curr != null){
        curr = curr.next
        size++
    }

    if(size <= 1){
        return null
    }
    let indexToRemove = size - n
    let head2 = head
    for ( let i = 0; i < size; i++){
        if(indexToRemove === 0){
            head2 = head2.next
            return head2
        }
        else if (i === indexToRemove -1 ){
            head2.next = head2.next.next
        }
        else{
            head2 = head2.next
        }
    }
    return head

};
