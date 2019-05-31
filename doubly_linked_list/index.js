/**
 * Class to create a Node object
 */
class Node {
  /**
   * Node constructor function
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Class to create a Doubly Linked List object
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new element to the end of the list
   * @param {any} value
   * @return {Object}
   */
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;

      return this;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  /**
   * Removes last element from the list
   * @return {Object | undefined}
   */
  pop() {
    if (!this.length) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return removedNode;
    }

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;

    removedNode.prev = null;

    return removedNode;
  }

  /**
   * Removes an element from the beginning of the list
   * @return {Object | undefined}
   */
  shift() {
    if (!this.length) return undefined;

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return removedNode;
    }

    this.head.next.prev = null;
    this.head = this.head.next;
    this.length--;

    removedNode.next = null;

    return removedNode;
  }

  /**
   * Adds a new element to the start of the list
   * @param {any} value
   * @return {Object}
   */
  unshift(value) {
    if (this.length === 0) return this.push(value);

    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  /**
   * Finds an element in the list on a given index
   * @param {number} index must be an integer
   * @return {Object | undefined}
   */
  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let current, i;

    if (index < this.length / 2) {
      current = this.head;
      i = 0;

      while (i !== index) {
        current = current.next;
        i++;
      }
    } else {
      current = this.tail;
      i = this.length - 1;

      while (i !== index) {
        current = current.prev;
        i--;
      }
    }

    return current;
  }

  /**
   * Sets new value to the element on a given index
   * @param {number} index must be an integer
   * @param {boolean} value
   */
  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }

  /**
   * Inserts a new element to the list on a given index
   * @param {number} index must be an integer
   * @param {boolean} value
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    nextNode.prev = newNode;

    newNode.prev = prevNode;
    newNode.next = nextNode;

    this.length++;

    return true;
  }

  /**
   * Removes an element from the list on a given index
   * @param {number} index must be an integer
   * @return {boolean | undefined}
   */
  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode.prev;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }

  /**
   * Reverses order in the list
   * @return {Object}
   */
  reverse() {
    let current = this.head,
      prev,
      next;

    for (let i = 0; i < this.length; i++) {
      prev = current.prev;
      next = current.next;

      current.next = prev;
      current.prev = next;

      current = next;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}
