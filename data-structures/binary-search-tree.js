class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _isLeaf(node) {
    return !node.left && !node.right;
  }

  insert(value) {
    const newNode = new Node(value, null, null);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      const currentIsGreater = current.value > newNode.value;
      const next = currentIsGreater ? current.left : current.right;

      if (!next) {
        if (currentIsGreater) {
          current.left = newNode;
        } else {
          current.right = newNode;
        }
        return;
      }

      current = next;
    }
  }

  lookup(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) return current;
      else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  delete(value) {
    if (!this.root) return;

    let current = this.root;
    let parent = null;

    while (current && current.value !== value) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }

    if (!current) return;

    if (!current.left && !current.right) {
      if (!parent) {
        this.root = null;
      } else if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      return;
    }

    if (!current.right) {
      if (!parent) {
        this.root = current.left;
      } else if (parent.left === current) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
      return;
    }

    if (!current.right.left) {
      if (!parent) {
        this.root = current.right;
      } else if (parent.left === current) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
      current.right.left = current.left;
      return;
    }

    let successorParent = current.right;
    let successor = current.right.left;

    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }

    successorParent.left = successor.right;
    successor.left = current.left;
    successor.right = current.right;

    if (!parent) {
      this.root = successor;
    } else if (parent.left === current) {
      parent.left = successor;
    } else {
      parent.right = successor;
    }
  }
}

const bst = new BinarySearchTree();

//      9
//   4     20
// 1   6 15   170

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

console.log(JSON.stringify(traverse(bst.root)));

bst.delete(20);
console.log("--------- AFTER DELETING 20 ----------");
console.log(JSON.stringify(traverse(bst.root)));
function traverse(node) {
  if (node === null) return null;

  return {
    value: node.value,
    left: traverse(node.left),
    right: traverse(node.right),
  };
}
