import Node from "./node.js";

export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    printList() {
        let current = this.head;

        console.log("Length:", this.length);

        if (!current) {
            console.log("List is empty!");
        }

        while (current) {
            console.log("data: ", current.data, "next data:", current.next?.data);

            current = current.next;
        }
    }

    add(data) {
        const newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;

        this.length++;
    }

    remove(data) {
        if (!this.head) return -1;

        // If the head node itself holds the data to be deleted
        if (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;

        // Find the node before the node we want to remove
        while (current.next && current.next.data !== data) {
            current = current?.next;
        }

        // If the node to be deleted was found
        if (current.next) {
            current.next = current.next.next;
            this.length--;
        }
    }

    getFirst() {
        return this.head?.data || null;
    }

    getLast() {
        if (!this.head) return null;

        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        return current.data;
    }

    get(index) {
        if (this.length <= index) {
            console.error("Index out of bounds");
            return null;
        }

        let currentIndex = 0;
        let current = this.head;

        while (currentIndex < index) {
            current = current?.next || current;
            currentIndex++;
        }

        return current;
    }

    getFirstNode() {
        return this.head;
    }

    getNextNode(node) {
        let current = this.head;

        while (current && node !== current) {
            current = current.next;
        }

        return current?.next || null;
    }

    getLastNode() {
        if (!this.head) return;

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    getNodeWith(data) {
        if (!this.head) return null;

        let current = this.head;

        while (current && current.data !== data) {
            current = current.next;
        }

        return current;
    }

    removeNode(node) {
        if (!this.head) return;

        if (this.head === node) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;

        while (current && current.next !== node) {
            current = current.next;
        }

        if (current && current.next === node) {
            current.next = current.next.next || null;
            this.length--;
        }
    }

    removeFirstNode() {
        if (!this.head) return;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        this.length--;
    }

    removeLastNode() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            this.length--;
            return;
        }

        let current = this.head;

        while (current.next && current.next.next) {
            current = current.next;
        }

        current.next = null;
        this.length--;
    }

    insertAfter(nodeTarget, newNode) {
        if (!this.head) return;

        let current = this.head;

        while (current && current !== nodeTarget) {
            current = current.next;
        }

        if (current) {
            newNode.next = current.next;
            nodeTarget.next = newNode;
            this.length++;
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }
}
