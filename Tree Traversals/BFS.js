/**
 *We have used bst insert method for creating our tree here just for testing purpose.
 *Only relevent function here is traversal function.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BFS {
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
    //let visited = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let currNode = queue.shift();
      console.log(currNode.value);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);

      //visited[currNode.value]=true;
    }
  }
}

let bfs = new BFS();

bfs.insert(15);
bfs.insert(8);
bfs.insert(22);
bfs.insert(12);
bfs.insert(4);

bfs.traversal(bfs.getRoot());
