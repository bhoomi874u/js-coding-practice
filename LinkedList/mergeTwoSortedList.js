function mergeTwoLink(h1, h2) {

    if (h1 === null) return h2;
    if (h2 === null) return h1;

    if (h1.val <= h2.val) {
        h1.next = mergeTwoLink(h1.next, h2);
        return h1;
    } else {
        h2.next = mergeTwoLink(h1, h2.next);
        return h2;
    }
}

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

let h1 = new ListNode(
    1,
    new ListNode(
        3,
        new ListNode(6)
    )
);

let h2 = new ListNode(
    2,
    new ListNode(
        4,
        new ListNode(5)
    )
);

// Merge the two lists
let result = mergeTwoLink(h1, h2);

// Print the merged list
while (result !== null) {
    process.stdout.write(result.val + " -> ");
    result = result.next;
}

console.log("null");