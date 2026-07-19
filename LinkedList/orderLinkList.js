function orderLinkList(head) {
    if (head == null || head.next == null) {
        return head;
    }

    let swapped;

    do {
        swapped = false;
        let current = head;

        while (current.next != null) {

            if (current.val > current.next.val) {

                let temp = current.val;
                current.val = current.next.val;
                current.next.val = temp;

                swapped = true;
            }

            current = current.next;
        }

    } while (swapped);

    return head;
}