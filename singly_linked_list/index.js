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
  }
}

/**
 * Class to create a Singly Linked List object
 */
class SinglyLinkedList {
  /**
   * Singly Linked List constructor function
   */
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

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Removes last element from the list
   * @return {Object | undefined}
   */
  pop() {
    if (!this.head) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;

      return removedNode;
    }

    let newTail = this.head;

    while (newTail.next !== removedNode) {
      newTail = newTail.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    return removedNode;
  }

  /**
   * Removes first element from the list
   * @return {Object | undefined}
   */
  shift() {
    if (!this.length) return undefined;

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
      this.length--;

      return removedNode;
    }

    const newTail = this.head.next;

    this.head = newTail;
    this.length--;

    return removedNode;
  }

  /**
   * Adds a new element to the start of the list
   * @param {any} value
   * @return {Object}
   */
  unshift(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = this.tail = newNode;
      this.length = 1;

      return this;
    }

    const prevHead = this.head;

    this.head = newNode;
    newNode.next = prevHead;
    this.length++;

    return this;
  }

  /**
   * Finds an element by index
   * @param {number} index must be an integer
   * @return {Object | undefined}
   */
  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let current = this.head,
      j = 0;

    while (j < index) {
      current = current.next;
      j++;
    }

    return current;
  }

  /**
   * Sets new value on an element on a given index
   * @param {any} value
   * @param {number} index must be an integer
   * @return {boolean}
   */
  set(value, index) {
    const node = this.get(index);

    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }
  /**
   * Inserts a new element on a given index
   * @param {any} value
   * @param {number} index must be an integer
   */
  insert(value, index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  /**
   * Removes an element from the list on a given index
   * @param {number} index must be an integer
   * @return {boolean}
   */
  remove(index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next.next;

    prevNode.next = nextNode;
    this.length--;

    return true;
  }

  /**
   * Reverses order in the list
   * @return {Object}
   */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let nextNode = null,
      prevNode = null,
      i = 0;

    while (i < this.length) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;

      i++;
    }

    return this;
  }
}
