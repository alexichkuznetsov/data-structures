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
    this.prev = null;
    this.value = value;
  }
}

/**
 * Class to create a Stack object
 */
class Stack {
  /**
   * Stack constructor
   */
  constructor() {
    this.top = null;
  }

  /**
   * Push new element to the stack
   * @param {any} value
   * @return {Object}
   */
  push(value) {
    const newNode = new Node(value);

    const prevTop = this.top;

    if (!prevTop) {
      this.top = newNode;

      return this;
    }

    newNode.prev = this.top;
    this.top = newNode;

    return this;
  }

  /**
   * Pop an element from the stack
   * @return {Object | undefined}
   */
  pop() {
    const poppedNode = this.top;

    if (!poppedNode) return undefined;

    const newTop = poppedNode.prev;
    this.top = newTop;
    poppedNode.prev = null;

    return poppedNode;
  }
}
