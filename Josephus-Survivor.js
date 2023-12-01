
/** Node: node for a doubly linked list. */
class DoubleNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}


/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new DoubleNode(val);
    /* empty list */
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }
    this.length++;
  }


}
function find_survivor(pple, skip) {
  let ll = new DoublyLinkedList()
  for (let i = 1; i <= pple; i++) {
    ll.push(i)
  }
  ll.tail.next = ll.head
  ll.head.previous = ll.tail
  let currentVal = ll.head
  while (ll.length > 1) {
    for (let i = 1; i < skip; i++) {
      currentVal = currentVal.next
    }
    currentVal = currentVal.previous
    currentVal.next = currentVal.next.next
    ll.length--;
    currentVal = currentVal.next
  }
  return currentVal
}
survivor = find_survivor(10, 3)
console.log('survivor is ', survivor.val)
module.exports = DoublyLinkedList;
