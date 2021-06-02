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

  printHeadAndTail() {
    console.log(this.head);
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

  getNodeByIndex(index) {
    //0 based index
    if (index < 0 || index > this.length - 1) return 'HIII';
    let node = this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    //console.log(node);
    return node;
  }

  getNodeByValue(value) {}
  setNodeByIndex(index, value) {}

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
  insertNodeByIndex(index, value) {
    let node = new Node(value);
    if (index < 0 || index > this.length - 1) return undefined;
    if (index == 0) return this.insertNodeAtbeginning(value);
    if (index == this.length) return this.pushNode(value);

    this.length++;
    let prevNode = this.getNodeByIndex(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = node;
    node.next = nextNode;
    node.prev = prevNode;
    nextNode.prev = node;

    return this.head;
  }

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
  removeNodeAtbeginning() {
    if (this.head == null) return undefined;
    if (this.head == this.tail) {
      //this.length==1
      this.head = this.tail = null;
      this.length--;
      return this.head;
    }
    this.length--;
    this.head = this.head.next;
    this.head.prev = null;
    return this.head;
  }
  removeNodeByIndex(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index == 0) return this.removeNodeAtbeginning();
    if (index == this.length - 1) return this.popNode();

    this.length--;
    let prevNode = this.getNodeByIndex(index - 1);
    let currentNode = prevNode.next;
    let nextNode = prevNode.next.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    //optional but just for the sake of......, otherwise if someone could access this node they might get the other nodes of the list as well using next and prev
    currentNode.next = null;
    currentNode.prev = null;

    return this.head;
  }

  popNode() {
    //remove Node at the end.
    if (this.head == null) return undefined;
    if (this.length == 1) return this.removeNodeAtbeginning();

    this.length--;
    let node = this.tail.prev;
    this.tail.prev = null;
    node.next = null;
    this.tail = node;

    return this.head;
  }
}

let list = new DoublyLinkedList();
// list.insertNodeAtbeginning(2);
// list.insertNodeAtbeginning(4);
// list.insertNodeAtbeginning(23);
list.pushNode(3);
list.pushNode(333);
list.pushNode(33);
list.pushNode(22);
// list.insertNodeByIndex(0, 99);
// list.insertNodeByIndex(5, 77);
// list.insertNodeByIndex(5, 777);
// list.insertNodeByIndex(5, 7777);
// list.insertNodeByIndex(5, 77);
// list.insertNodeByIndex(5, 777);
// list.insertNodeByIndex(5, 7777);
// list.printList();
// list.removeNodeAtbeginning();
// list.removeNodeAtbeginning();
// list.popNode();
list.printList();
console.log(list.removeNodeByIndex(3));
list.printList();
