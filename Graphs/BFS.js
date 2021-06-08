class Graph {
  constructor() {
    this.adjacency = {};
  }

  addVertex(vertex) {
    this.adjacency[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacency[vertex1].push(vertex2);
    this.adjacency[vertex2].push(vertex1);
  }

  removeVertex() {}
  removeEdge() {}

  bfsTraversal(root) {
    let visited = [];
    let queue = [];
    queue.push(root);
    visited[root] = true;
    while (queue.length) {
      let v = queue.shift();
      console.log(v);
      for (let i = 0; i < this.adjacency[v].length; i++) {
        if (visited[this.adjacency[v][i]] != true) {
          queue.push(this.adjacency[v][i]);
          visited[this.adjacency[v][i]] = true;
        }
      }
      //console.log(queue);
    }
  }
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(9);

// graph.addEdge(1, 2);
// graph.addEdge(1, 3);
// graph.addEdge(2, 4);
// graph.addEdge(2, 5);
// graph.addEdge(3, 5);
// graph.addEdge(4, 5);
// graph.addEdge(5, 6);
// graph.addEdge(6, 4);
// graph.addEdge(7, 9);

graph.bfsTraversal(1);
graph.bfsTraversal(7);
