// reverse linked list
const reverseList = head => {

    let prev = null;
    let current = head;

    while(current) {
        //change direction
        let tmp = current.next;

        // change direction
        current.next = prev;

        // move current and prev by 1
        prev = current;
        current = tmp;

    }
    return prev;

};

module.exports = reverseList;
