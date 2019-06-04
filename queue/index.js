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
    this.next = null;
    this.value = value;
  }
}

/**
 * Class to create a Queue object
 */
class Queue {
  /**
   * Queue constructor
   * @return {Object}
   */
  constructor() {
    this.start = null;
    this.end = null;
  }

  /**
   * Add new element to the queue
   * @param {any} value
   * @return {Object}
   */
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.start) {
      this.start = newNode;
      this.end = newNode;

      return this;
    }

    const prevEnd = this.end;

    prevEnd.next = newNode;
    this.end = newNode;

    return this;
  }

  /**
   * Remove an element from the queue
   * @return {Object | undefined}
   */
  dequeue() {
    const removedNode = this.start;

    if (!removedNode) return undefined;

    if (this.start === this.end) {
      this.start = null;
      this.end = null;

      return removedNode;
    }

    const newStart = removedNode.next;
    this.start = newStart;
    removedNode.next = null;

    return removedNode;
  }
}
