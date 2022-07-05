// compared to singly linked list:
// has pointer to previous node
// its minus: requires more memory

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const nodeToBeDeleted = this.tail;

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = nodeToBeDeleted.previous;
            this.tail.next = null;
        }

        this.length--;

        nodeToBeDeleted.previous = null; // to remove returned node connection with the whole list

        return nodeToBeDeleted;
    }

    shift() {
        if (this.length === 0) return undefined;

        const oldHeadToBeDeleted = this.head;

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = oldHeadToBeDeleted.next;
            this.head.previous = null;
        }

        this.length--;

        oldHeadToBeDeleted.next = null; // to remove returned node connection with the whole list

        return oldHeadToBeDeleted;
    }

    unshift(value) {
        const nodeToBeAdded = new Node(value);

        if (this.length === 0) {
            this.head = nodeToBeAdded;
            this.tail = nodeToBeAdded;
        } else {
            const currentHead = this.head;

            currentHead.previous = nodeToBeAdded;
            this.head = nodeToBeAdded;
            this.head.next = currentHead;
        }

        this.length++;
        return this;
    }

    // in contrary to singly linked list, we have 'prev' property
    // thus we can check if searched index is on the right or left side of the middle of list
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let currentNode;

        if (index <= this.length / 2) {
            // iterating from the beginning of the list
            let counter = 0;
            currentNode = this.head;

            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            // iterating from the end of the list

            let counter = this.length - 1;
            currentNode = this.tail;

            while (counter !== index) {
                currentNode = currentNode.previous;
                counter--;
            }
        }

        return currentNode;
    }

    set(index, value) {
        const nodeToBeUpdated = this.get(index);

        if (index) {
            nodeToBeUpdated.value = value;
            return true;
        }

        return false;
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
const firstNode = new Node(12);
firstNode.next = new Node(14);
firstNode.next.previous = firstNode; // setting 1-st node as a "previous" property to the 2-nd node


const list = new DoublyLinkedList();

console.log('Pushing:');
list.push('Hi');
list.push('you');
list.push('there');

console.log(list);
list.toString();

console.log('Popping:');
const poppedNode = list.pop();
list.toString();
console.log(poppedNode);

console.log('Shifting:');
const shiftedNode = list.shift();
list.toString();
console.log(shiftedNode);

console.log('Unshifting:');
list.unshift('Welcome');
list.toString();
console.log(list);

list.push('my');
list.push('Friend');
list.toString();


console.log('Getting the 2-nd item: ("my")');
const getItem = list.get(2);
console.log(getItem);

console.log('Setting the 3-rd item value:');
list.set(3, 'Darling');
list.toString();
