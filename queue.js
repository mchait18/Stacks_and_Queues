/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;

  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;

  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val)
    if (this.first === null) this.first = newNode;
    if (this.last !== null) this.last.next = newNode;
    this.last = newNode;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw new Error("Queue is empty")
    let firstNode = this.first.val
    if (this.first.next)
      this.first = this.first.next
    else {
      this.first = null
      this.last = null
    }
    this.size--;
    return firstNode
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) throw new Error("Queue is empty")
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0

  }
}

module.exports = Queue;
