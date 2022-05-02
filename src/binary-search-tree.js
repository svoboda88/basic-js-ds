const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.tree = null;
}
  
  root() {
    return this.tree;
  }

  add(data) {
    const newNode = new Node(data);
    let nodeAdd = tree => {
      if (tree === null) {
        this.tree = newNode;
      } else if (data > tree.data) {
        if (tree.right === null) {
          tree.right = newNode;
        } else nodeAdd(tree.right);
      } else if (data < tree.data) {
        if (tree.left === null) {
          tree.left = newNode;
        } else nodeAdd(tree.left)
      }
    }
    nodeAdd(this.tree);
  }

  has(data) {

  }

  find(data) {
    
  }

  remove(data) {

  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};