/**
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printList() {
    var curr = this.head;
    var str = '';
    while (curr) {
      str += curr.value + ' ';
      curr = curr.next;
    }
    console.log(str);
    console.log(this.length);
  }

  insertNodeAtbeginning(value) {
    let node = new Node(value);
    this.length++;
    if (this.head == null) {
      this.head = this.tail = node;
      return this.head;
    }
    node.next = this.head;
    this.head.prev = node;

    this.head = node;
    return this.head;
  }
  insertNodeByIndex(index, value) {}
  pushNode(value) {
    //insertNode at the end.
    let node = new Node(value);
    this.length++;
    if (this.head == null) {
      this.head = this.tail = node;
      return this.head;
    }
    this.tail.next = node;
    node.prev = this.tail; //this.tail.next.prev=this.tail
    this.tail = node;
    return this.head;
  }
  removeNodeAtbeginning() {}
  removeNodeByIndex(index) {}
  popNode(value) {} //insertNode at the end.

  getNodeByIndex(index) {}
  getNodeByValue(value) {}
  setNodeByIndex(index, value) {}
}

let list = new DoublyLinkedList();
list.insertNodeAtbeginning(2);
list.insertNodeAtbeginning(4);
list.insertNodeAtbeginning(23);
console.log(list.insertNodeAtbeginning(21));
list.printList();
