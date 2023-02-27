var reorderList = function(head) {
    let arr = [], curr = head
    if(!curr) {
        return null
    }

    while(curr) {
        arr.push(curr)
        curr = curr.next
    }
    let len = arr.length
    curr = head
    for(let i = 0; i < len; i++) {
        if(i % 2 === 0) {
            curr.next = arr.shift()
        }
        else {
            curr.next = arr.pop()
        }
        curr = curr.next
    }
    curr.next = null
    return 
};
