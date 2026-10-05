class linkedList {
    constructor(key, value) {
        this.key = key,
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class lruCache {
    map = new Map();
    count = 0;
    capacity;
    //dummy nodes
    head = new linkedList(0, 0);
    tail = new linkedList(0, 0);
    curr = this.head;
    constructor(capacity) {
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.capacity = capacity;
    }

    // PUT REQUEST
    putRequest(key, value) {
        let temp = new linkedList(key, value);
        if (count < capacity) {
            this.map.set(key, temp);
            curr.next = temp;
            temp.prev = this.curr;
            this.curr = this.curr.next; // this.curr = temp;
            count++;
        } else {
            // remove from tail
            this.curr.prev.next = this.tail;
            // add at head
            temp.next = this.head.next;
            temp.prev = this.head;
            this.head.next = temp;
        }
    }

    getRequest(key) {
        temp = this.map.get(key);
        if (head.next.key != temp.key) {
            // if not already the head node, remove from it's current position and make it a head node.
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;

            temp.next = this.head.next;
            this.head.next = temp;
            temp.prev = this.head;

            return temp.value;
        }
    }
}