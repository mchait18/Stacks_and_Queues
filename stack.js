/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top(front) of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val)
    if (this.first === null) this.last = newNode;
    newNode.next = this.first
    this.first = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
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


  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) throw new Error("Queue is empty")
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

function reverseString(str) {
  let strStack = new Stack()
  for (let char of str) {
    strStack.push(char)
  }
  let reversed = ""
  let currentVal = strStack.first
  while (currentVal) {
    reversed += currentVal.val
    currentVal = currentVal.next
  }
  return reversed;
}

function balancedBracket(str) {
  let stack = new Stack()
  let openBracket = "{[("
  let closeBracket = "}])"
  let balanced = true;

  for (let char of str) {
    if (openBracket.indexOf(char) !== -1) {
      stack.push(char)
    }
    if (closeBracket.indexOf(char) !== -1) {
      //check if they are a pair
      let topStack = stack.peek()
      if (topStack === "{" && char === "}"
        || topStack === "(" && char === ")"
        || topStack === "[" && char === "]")
        stack.pop()
    }
  }
  if (!stack.isEmpty()) balanced = false
  return balanced
}
console.log("bb is ", balancedBracket("((ok) [nope)]"))

module.exports = Stack;
