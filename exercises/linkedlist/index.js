// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getLast() {

        if (!this.head) {
            return;
        }

        let node = this.head;

        while (node) {
            if (node.next) {
                node = node.next;
            } else {
                return node;
            }
        }
    }

    getFirst() {
        return this.head;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let nodeBefore = this.head;
        let node = this.head.next;

        while (node.next) {
            nodeBefore = node;
            node = node.next;
        }

        nodeBefore.next = null;
    }

    insertLast(data) {

        const last = this.getLast();

        const node = new Node(data);

        if (last) {
            last.next = node;
        } else {
            this.head = node;
        }

    }

    getAt(index) {
        let node = this.head;
        let counter = 0;

        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(index) {

        if (!this.head || !this.getAt(index)) {
            return null;
        }

        let previousNode = this.getAt(index - 1);
        let nextNode = this.getAt(index);

        if (index === 0) {
            this.head = this.head.next;
            return;
        } else {
            previousNode.next = nextNode.next;
            return;
        }

    }

    insertAt(data, index) {
        //this method uses the second parameter which assign to next which is good unlike mine.

        //if empty
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        //if 0
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        //if out of bounds
        if (!this.getAt(index)) {
            this.insertLast(data);
            return;
        }

        //if middle

        let previousNode = this.getAt(index - 1);
        let currentNode = this.getAt(index);

        const node = new Node(data, currentNode);
        previousNode.next = node;

    }

    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;
            node = node.next;
        }
    }


}

module.exports = {Node, LinkedList};
