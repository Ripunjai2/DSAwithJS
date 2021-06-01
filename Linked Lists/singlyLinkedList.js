class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printList() {
    var curr = this.head;
    var str = '';
    while (curr) {
      str += curr.val + ' ';
      curr = curr.next;
    }
    console.log(str);
    console.log(this.length);
  }

  getNodeByIndex(index) {
    let node = this.head;
    if (index < 0 || index > this.length - 1) return undefined;
    if (index == 0) return this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  }

  getNodeByValue(value) {
    let node = this.head;
    while (node != null) {
      if (node.val == value) return node;
      node = node.next;
    }
    return -1;
  }

  setNodeValueByIndex(index, value) {
    let node = this.head;
    if (index < -1 || index > this.length - 1) return undefined;
    if (index == 0) {
      node.val = value;
      return node;
    }
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    node.val = value;
    return node;
  }

  insertAtBeginning(value) {
    let node = new Node(value);
    this.length++;
    if (this.head == null) {
      this.head = this.tail = node;
      return node;
    }
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  //insert node at end of the list
  pushNode(val) {
    let node = new Node(val);
    this.length++;
    if (this.head == null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  insertNodeByIndex(index, value) {
    if (index < 0 || index > this.length - 1) return undefined;

    if (index == 0) return this.insertAtBeginning(value);
    if (index == this.length - 1) return this.pushNode(value);

    this.length++;
    let newNode = new Node(value);
    let node = this.getNodeByIndex(index - 1); //get the (index-1)th node and set its next node as new node.
    //let tempNodde=node.next
    newNode.next = node.next;
    node.next = newNode;
    return this.head;
  }

  removeFromBeginning() {
    if (this.head == null) return undefined;
    this.length--;
    if (this.head.next == null) {
      this.head = this.tail = null;
      return this.head;
    }
    this.head = this.head.next;
    return this.head;
  }

  //remove node from end of the list
  popNode() {
    if (this.head == null) return 'Nothing available';
    if (this.head == this.tail) {
      this.head = this.tail = null;
      this.length--;
      return this;
    }
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;

    return this;
  }

  removeNodeByIndex(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index == 0) return this.removeFromBeginning();
    if (index == this.length - 1) return this.popNode();

    this.length--;
    let node = this.getNodeByIndex(index - 1);
    node.next = node.next.next;
    return this.head;
  }
}
let list = new SinglyLinkedList();
list.pushNode(2);
list.pushNode(12);
list.pushNode(26);
list.pushNode(126);
// console.log(list, list.length);
// list.popNode();
// console.log(list, list.length);
// console.log(list.getNodeByIndex(0));
// console.log(list.getNodeByIndex(3));
// console.log(list.getNodeByIndex(4));
// console.log(list.getNodeByValue(2));
// console.log(list.getNodeByValue(26));
// console.log(list.getNodeByValue(126));
// console.log(list.getNodeByValue(12666));
// console.log(list);
// console.log(list.setNodeValueByIndex(0, 4));
// console.log(list.setNodeValueByIndex(5, 15));
// console.log(list.setNodeValueByIndex(2, 41));
// console.log(list.setNodeValueByIndex(3, 33));
// console.log(list);
// list.insertAtBeginning(111);
// console.log(list);
// list.pushNode(10);
// console.log(list);
// list.removeFromBeginning();
// console.log(list);
// list.removeFromBeginning();
// console.log(list);
// list.removeFromBeginning();
// console.log(list);
// list.removeFromBeginning();
// console.log(list);
// list.removeFromBeginning();
// list.printList();
// list.insertNodeByIndex(1, 69);
// list.insertNodeByIndex(4, 79);
// console.log(list.insertNodeByIndex(0, 88));
list.printList();
list.removeNodeByIndex(0);
console.log(list.removeNodeByIndex(9));
list.removeNodeByIndex(1);
list.printList();
