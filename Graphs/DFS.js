class Graph {
  constructor() {
    this.adjacency = {};
    this.visited = [];
  }

  addVertex(vertex) {
    this.adjacency[vertex] = [];
    this.visited[vertex] = false;
  }

  addEdge(vertex1, vertex2) {
    this.adjacency[vertex1].push(vertex2);
    this.adjacency[vertex2].push(vertex1);
  }

  removeVertex() {}
  removeEdge() {}

  dfsTraversal(root) {
    //let visited=[];
    let stack = [];
    stack.push(root);
    this.visited[root] = true;

    while (stack.length) {
      let v = stack.pop();
      console.log(v);
      //console.log(this.adjacency[v].length);
      for (let i = 0; i < this.adjacency[v].length; i++) {
        if (this.visited[this.adjacency[v][i]] != true) {
          this.visited[this.adjacency[v][i]] = true;
          stack.push(this.adjacency[v][i]);
        }
      }
      //console.log(stack);
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

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 5);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(6, 4);
graph.addEdge(7, 9);

graph.dfsTraversal(1);
//graph.dfsTraversal(7);
