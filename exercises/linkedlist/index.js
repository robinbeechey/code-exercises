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

        const newNode = new Node(data);

        //if no head insert head
        if (!this.head) {
            this.head = newNode;
            return;
        }


        let node = this.head;

        //if there is head then check if it has next, if not assign to newNode

        while (node) {
            if (!node.next) {
                node.next = newNode;
                return;
            }
            node = node.next;
        }
    }

}

module.exports = {Node, LinkedList};
