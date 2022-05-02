const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  head = null;
  tail = null;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if(!this.tail && !this.head) {
      this.tail = newNode;
      this.head = newNode;

      return newNode.value;
    } 

    this.tail.next = newNode;
    this.tail = this.tail.next;

    return newNode.value;
  }
  dequeue() {
    const removedNode = this.head;
    this.head = this.head.next;

    return removedNode.value;
  }
}



module.exports = {
  Queue
};
