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

        if (last){
            last.next = node;
        } else {
            this.head = node;
        }

    }

    getAt(integer){
        let node = this.head;
        let counter = 0;

        while (node){
            if (counter === integer){
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(integer) {

        if (!this.head || !this.getAt(integer)) {
            return null;
        }

        let previousNode = this.getAt(integer - 1);
        let nextNode = this.getAt(integer);

        if (integer === 0) {
            this.head = this.head.next;
            return;
        } else {
            previousNode.next = nextNode.next;
            return;
        }

    }

    insertAt(data, integer){
        const newNode = new Node(data);

        //if empty
        if (!this.head){
            this.head = newNode;
            return;
        }   

        //if 0
        if (integer === 0){
            newNode.next = this.getFirst();
            this.head = newNode;
            return;
        }

        //if out of bounds
        if (!this.getAt(integer)){
            this.insertLast(data);
            return;
        }

        //if middle

        let previousNode = this.getAt(integer - 1);
        let currentNode = this.getAt(integer);

        newNode.next = currentNode;
        previousNode.next = newNode;

    }

}

module.exports = {Node, LinkedList};
