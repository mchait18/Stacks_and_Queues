/** Node: node for a queue. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


/** Deque: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** appendright(val): add new value to end of the queue. Returns undefined. */

    appendright(val) {
        let node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            node.prev = this.last;
            this.last = node;
        }

        this.size++;
    }
    /** appendleft(val): add new value to beg of the queue. Returns undefined. */

    appendleft(val) {
        let node = new Node(val);

        if (!this.first) {
            this.last = node;
        }
        else {
            node.next = this.first;
            this.first.prev = node;
        }
        this.first = node;
        this.size++;
    }
    /** popleft(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */

    popleft() {
        if (!this.first) throw new Error("Can't dequeue from an empty queue.");

        let temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.first.prev = null;
        this.size--;
        return temp.val;
    }
    /** popright(): remove the node from the end of the queue
         * and return its value. Should throw an error if the queue is empty. */

    popright() {
        if (!this.first) throw new Error("Can't dequeue from an empty queue.");

        let temp = this.last;
        if (this.first == this.last) {
            this.first = null;
            this.last = null;
        }
        this.last = this.last.prev;
        this.last.next = null;
        this.size--;
        return temp.val;
    }
    /** peekleft(): return the value of the first node in the queue. */

    peekleft() {
        return this.first.val;
    }
    peekright() {
        return this.last.val;
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        return this.size === 0;
    }
}

function find_survivor(pple, skip) {
    let d = new Deque()
    for (let i = 1; i <= pple; i++) {
        d.appendright(i)
    }
    d.last.next = d.first
    let currentVal = d.first
    while (currentVal.next) {
        console.log("in while, currentval is ", currentVal.val)
        for (let i = 1; i < skip; i++) {
            currentVal = currentVal.next
        }
        console.log("after for, currentVal is ", currentVal.val, "and currentVal.prev is", currentVal.prev.val,
            "currentVal.next is", currentVal.next.val)
        let prev = currentVal.prev
        console.log("prev is ", prev)
        prev.next = currentVal.next
        // currentVal.next.prev = currentVal.prev
        console.log("after for, currentVal is ", currentVal.val, "and currentVal.prev is", currentVal.prev.val,
            "currentVal.next is", currentVal.next.val)
        console.log("d.size is ", d.size)
        currentVal = currentVal.next
    }
    return currentVal
}
survivor = find_survivor(10, 3)
console.log('survivor is ', survivor)
module.exports = Deque;
