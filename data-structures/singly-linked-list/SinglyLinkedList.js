// analogy:
// array - an elevator with each floor as an index. You can jump just there
// linked list - like stairs. You need to pass every of previous ones, before a needed one

// 1. it's a data structure that contains a head, tail and length property
// 2. consists of nodes, where each node has its value and pointer to another node or null
// it has a link only to the next node
// (in contrary to doubly-linked list, that has also a link to a previous node)

// good for inserting/deleting values at the beginning, because it doesn't have to chane indexes to all next items

// random access to any element is not allowed,
// in contrary to simple array where any item can be accessed at a specific index

// where it wins vs standard arrays:
// 1. super good - at insertions (especially beginning)
// 2. removals - good at beginning, worse at the end
// where it sucks:
// searching and access - it needs to go through all list, because items are not indexed

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null; // a start of list
        this.tail = null; // end of list
    }

    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node; //  "this.tail" is a previous Node OBJECT, then we make its .next property to reference a new Node
            this.tail = node; // afterwards we forget about previous node obj and make this.tail to reference a new object
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            counter++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    // update node by its index
    set(index, value) {
        const nodeToBeUpdated = this.get(index);

        if (!nodeToBeUpdated) return false;

        nodeToBeUpdated.value = value;

        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) return !!this.push(value); // convert returned list from f() call to "true"

        if (index === 0) return !!this.unshift(value);

        // we need to get node, that will be before the needed index
        const prevNode = this.get(index - 1);
        const newlyCreatedNode = new Node(value);

        newlyCreatedNode.next = prevNode.next;
        prevNode.next = newlyCreatedNode;


        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === this.length - 1) return this.pop();

        if (index === 0) return this.shift();

        const previousNodeToOneThatHasToBeDeleted = this.get(index - 1);
        const nodeThatWillBeRemoved = previousNodeToOneThatHasToBeDeleted.next;

        previousNodeToOneThatHasToBeDeleted.next = nodeThatWillBeRemoved.next;
        this.length--;

        return nodeThatWillBeRemoved;
    }

    pop() {
        // check if list is empty
        if (!this.head) return undefined;

        let currentNode = this.head;
        let previousNode = currentNode;

        // we move 1 step forward, keeping track of the previous node
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = previousNode;
        this.tail.next = null; // removing the last ("current" in the iteration) node
        this.length--;

        // check if list now is empty
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // returning the node that has been removed
        return currentNode;
    }

    // remove the 1-st item and move the new head to the next node
    shift() {
        if (!this.head) return undefined;

        const currentHeadNodeThatWillBeRemoved = this.head;
        this.head = this.head.next;
        this.length--;

        // check if list now is empty
        if (this.length === 0) {
            this.tail = null;
        }

        // returning the node that has been removed
        return currentHeadNodeThatWillBeRemoved;
    }

    unshift(value) {
        const createdNode = new Node(value);

        if (!this.head) {
            this.head = createdNode;
            this.tail = createdNode;
        } else {
            const currentHeadNode = this.head;

            createdNode.next = currentHeadNode;
            this.head = createdNode;
        }

        this.length++;
        return this;
    }

    reverse() {
        let currentNode = this.head;

        // swap head and tail
        this.head = this.tail;
        this.tail = currentNode;

        let prev = null; // we need to make sure that the end of our list "tail" will not have any next node
        let next;

        for (let i = 0; i < this.length; i++) {
            // going in direction of original list from head to its tail (end)
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }

        return this;
    }

    traverse() {
        let current = this.head; // initial state
        let valuesResultArray = [];

        while (current) {
            valuesResultArray.push(current.value);
            current = current.next;
        }

        return valuesResultArray;
    }

    toString() {
        const allValues = this.traverse();
        console.log(allValues);
    }
}

// approach for linking items without LinkedListClass methods
const first = new Node('Hello');
first.next = new Node('beautiful');
first.next.next = new Node('World');
first.next.next.next = new Node('there');

const list = new SinglyLinkedList();

console.log('Pushing:');
list.push('Hi');
list.push('you');
list.push('there');

console.log(list);
console.log(list.head.next);
console.log(list.head.next.next);

console.log('\nPopping:');
const removedNode = list.pop();
console.log(removedNode);
list.toString();


console.log('\nShifting - removing 1-st item in list');
list.push('Darling');
list.shift();
list.toString();

console.log('\nUnshifting - adding 1-st item in list');
list.unshift('Greetings');
list.toString();


console.log('\nGet:');
const secondNode = list.get(2);
console.log(secondNode);


console.log('\nSet:');
list.set(2, 'Pretty');
list.toString();


console.log('\nInsert:');
list.insert(1, 'to');
list.insert(2, 'all');
list.toString();

console.log('\nRemove 2-nd index ("all"):');
const deletedNode = list.remove(2);
console.log(deletedNode);
list.toString();


console.log('\nReversing list:');
list.reverse();
list.toString();
