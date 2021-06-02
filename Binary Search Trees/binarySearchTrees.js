/**
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root == null) {
      this.root = node;
      return this.root;
    }
    let current = this.root;
    while (true) {
      if (value == current.value) return undefined;
      if (value < current.value) {
        if (current.left == null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        //if (value > current.value)
        if (current.right == null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  //   search(value) {
  //     if (this.root == null) return undefined;
  //     // if(this.root.value==value) return this.root;

  //     let current = this.root;
  //     while (current != null) {
  //       if (current.value == value) {
  //         console.log(current.value);
  //         return current;
  //       }
  //       if (value < current.value) {
  //         current = current.left;
  //       } else {
  //         current = current.right;
  //       }
  //     }
  //     return undefined;
  //   }

  search(value) {
    if (this.root == null) return undefined;
    // if(this.root.value==value) return this.root;

    let current = this.root;
    let found = false;
    while (current != null && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (found) return current;
    return undefined;
  }
}

let bst = new BST();

bst.insert(15);
bst.insert(8);
bst.insert(22);
bst.insert(12);
bst.insert(4);

console.log(bst.search(8));
console.log(bst.search(22));
console.log(bst.search(11));
