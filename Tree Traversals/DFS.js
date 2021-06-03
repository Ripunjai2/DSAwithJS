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

class DFS {
  constructor() {
    this.root = null;
  }
  getRoot() {
    return this.root;
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

  traversal(root) {
    let stack = [];

    stack.push(root);
    while (stack.length) {
      let currNode = stack.pop();
      console.log(currNode.value);

      if (currNode.left) stack.push(currNode.left);
      if (currNode.right) stack.push(currNode.right);
    }
  }
}

let dfs = new DFS();

dfs.insert(15);
dfs.insert(8);
dfs.insert(22);
dfs.insert(12);
dfs.insert(4);
dfs.insert(20);
dfs.insert(24);
dfs.insert(26);

dfs.traversal(dfs.getRoot());
