function removeNthFromEnd(head, n) {

    let dummyHead =  {next: head}

    let fast = dummyHead;
    let slow = dummyHead;

    for (let i = 0; i < n; i++) {
        fast = fast.next; // move pointer n steps ahead of slow
    }
    
    //
    while(fast.next) {
        // traverse till the end of ll so slow will have last - n position
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummyHead.next;

}

module.exports = removeNthFromEnd;
