/**
 * Array Implementation- we have inbuilt push and pop functions available on array. We don't need to do anything manually.
 * LinkedList Implementation- We will do that right now.
 * We are implementing the stack here by inserting and removing at the beginning rather than at the end because it will reduce the complexity for insertion and deletion to constant as we would need to traverse till end node to add or remove.
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  printList() {
    let str = '';
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      str += current.value + ' ';
      current = current.next;
    }
    console.log(str);
  }

  push(values) {
    let node = new Node(values);
    this.size++;
    if (this.head == null) {
      this.head = this.tail = node;
      return this.head;
    }
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  pop() {
    if (this.head == null) return undefined;
    if (this.head == this.tail) {
      this.head = this.tail = null;
      this.size--;
    }
    this.size--;
    let nodeRemoved = this.head;
    this.head = this.head.next;
    return nodeRemoved;
  }

  peek() {
    if (this.head == null) return undefined;
    return this.head.value;
  }

  getSize() {
    return this.size;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(11);
stack.push(111);
stack.push(1111);
stack.push(11111);
stack.printList();
console.log(stack.pop());
stack.pop();
stack.pop();
stack.printList();
console.log(stack.peek());
console.log(stack.getSize());
