/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0, head)
    let leftPrev = dummy
    let curr = head

    for(let i = 0; i < left-1; i++) {
        leftPrev = curr
        curr = curr.next
    }

    let prev = null
    for(let i = left; i < right + 1; i++) {
        let tempNext = curr.next
        curr.next = prev
        prev = curr
        curr = tempNext
    }

    leftPrev.next.next = curr
    leftPrev.next = prev

    return dummy.next
};
