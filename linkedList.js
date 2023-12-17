const Node = require("./llist-node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Adds a new node containing value to the end of the list
  append(value) {
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
      this.size += 1;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }

      temp.next = Node(value);
      this.tail = temp.next;
      this.size += 1;
    }
  }

  // Adds a new node containing value to the start of the list
  prepend(value) {
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
      this.size += 1;
    } else {
      let temp = this.head;
      this.head = Node(value);
      this.head.next = temp;
      this.size += 1;
      // tail in this case will always be the last node so don't have to update
    }
  }

  getSize() {
    return this.size;
  }

  getHeadNode() {
    return this.head;
  }

  getTailNode() {
    return this.tail;
  }

  // Returns the node at the given index
  at(index) {
    // starting at index 1
    if (index <= 0 || index > this.size) {
      return null;
    }

    let temp = this.head;
    for (let i = 2; i <= index; i++) {
      // if index is 1 it will not enter the loop
      temp = temp.next;
    }
    return temp; // return node at the given index
  }

  // Removes the last element from the list
  pop() {
    if (this.head === null) {
      return;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    let temp = this.head;
    while (temp.next.next) {
      // if there are only 2 node (left), it will not enter the loop
      temp = temp.next;
    }
    temp.next = null;
    this.tail = temp;
    this.size -= 1;
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let temp = this.head;
    for (let i = 1; i <= this.size; i++) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    let temp = this.head;
    for (let i = 1; i <= this.size; i++) {
      if (temp.value === value) {
        return i;
      }

      temp = temp.next;
    }

    return null;
  }

  // Represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console
  toString() {
    if (this.head === null) {
      return "null";
    }

    let linkedList = "";
    let temp = this.head;

    while (temp) {
      linkedList += `( ${temp.value} ) -> `;
      temp = temp.next;
    }

    linkedList += "null";

    return linkedList;
  }
}

module.exports = LinkedList;
