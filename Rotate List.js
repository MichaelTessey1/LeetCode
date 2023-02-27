var rotateRight = function(head, k) {
    if(!head) {
        return head
    }

    let len  = 1, tail = head

    while(tail.next) {
        tail = tail.next
        len++
    }

    k = k % len

    if(k === 0) {
        return head
    }

    let curr = head

    for(let i = 0; i < (len - k - 1); i++) {
        curr = curr.next
    }

    let newHead = curr.next
    curr.next = null
    tail.next = head

    return newHead
};
