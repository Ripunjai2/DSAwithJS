/**
 * Array Implementation- We can implement that using either push() and unshif() or using shift() and pop(). But this requires reindexing whenever we addd/remove at the beginning. We will overcome this with the linked list.
 * Linked List implementation- We will add at the end and remove from beginning. if we remove from the end we will have to traverse the complete list in singly linked list.
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
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

  enqueue(value) {
    let node = new Node(value);
    this.size++;
    if (this.head == null) {
      this.head = this.tail = node;
      return this.head;
    }
    this.tail.next = node;
    this.tail = node;
    return this.head;
  }

  dequeue() {
    if (this.head == null) return undefined;

    this.size--;
    let nodeRemoved = this.head;
    this.head = this.head.next;

    nodeRemoved.next = null; //just for the sake of it.
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

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(11);
queue.enqueue(111);
queue.enqueue(1111);
queue.printList();
console.log(queue.peek());
console.log(queue.getSize());
queue.dequeue();
queue.printList();
