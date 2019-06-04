/**
 * Class to create a Node object
 */
class Node {
  /**
   * Node constructor
   * @param {any} value
   * @return {Object}
   */
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

/**
 * Class to create a Binary Search Tree
 */
class BinarySearchTree {
  /**
   * Binary Search Tree constructor
   */
  constructor() {
    this.root = null;
  }

  /**
   * Insert new element to the tree
   * @param {any} value
   * @return {Object}
   */
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value === newNode.value) return this;

      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;

          return this;
        }

        current = current.left;
      } else if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode;

          return this;
        }

        current = current.right;
      }
    }
  }

  /**
   * Find a node in the tree
   * @param {any} value
   * @return {Object | undefined}
   */
  find(value) {
    if (!this.root) return undefined;

    let current = this.root;

    while (true) {
      if (current.value === value) return current;

      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return undefined;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return undefined;
        }
      }
    }
  }
}
