class ListNode {
  data: unknown;
  next: ListNode | null;

  constructor(data: unknown, next: ListNode | null = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  head: ListNode | null;

  constructor(head: ListNode | null = null) {
    this.head = head;
  }

  size(): number {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next
    }
    return count;
  }

  clear(): void {
    this.head = null;
  }

  getFirst(): ListNode | null {
    return this.head;
  }

  getLast(): ListNode | null {
    let node = this.head;

    while (node?.next) {
      node = node.next;
    }

    return node;
  }

  insertAtFront(data: unknown): void {
    const temp = this.getFirst();

    this.head = new ListNode(data);
    this.head.next = temp;
  }

  insertAtEnd(data: unknown): void {
    const last = this.getLast();
    if (!last) return;

    const node = new ListNode(data);

    if (!this.head) {
      this.insertAtFront(node);
      return;
    }

    last.next = node;
  }

  insertAtPosition(data: unknown, position: number): void {
    if (position === 1) {
      this.insertAtFront(data);
      return;
    }

    if (!this.head) {
      throw new Error("Invalid position: List is empty");
    }

    let current = this.getFirst();

    for (let i = 1; i < position - 1; i++) {
      if (!current) {
        throw new Error("Invalid position: Position exceeds list size");
      }

      current = current!.next;
    }

    if (!current) {
      throw new Error("Invalid position: Position exceeds list size");
    }

    const node = new ListNode(data, current.next);
    current.next = node;
  }

  removeFirst(): void {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast(): void {
    if (!this.head) return;

    let current = this.getFirst();
    const size = this.size();

    for (let i = 1; i < size; i++) {
      if (!current) {
        throw new Error("Invalid position: Position exceeds list size");
      }

      if (i === size - 1) {
        current.next = null;
      }

      current = current.next;
    }
  }

  removeAtPosition(position: number): void {
    if (!this.head) {
      throw new Error("Invalid position: List is empty");
    }

    let current = this.getFirst();

    for (let i = 1; i < position - 1; i++) {
      if (!current) {
        throw new Error("Invalid position: Position exceeds list size");
      }

      current = current!.next;
    }

    if (!current || !current.next) {
      throw new Error("Invalid position: Position exceeds list size");
    }

    current.next = current.next?.next || null;
  }

  search(data: unknown): ListNode | null {
    let node = this.getFirst();

    while (node) {
      if (!node) return null;

      if (node.data == data) return node;
      node = node.next;
    }

    return node;
  }
}

const node1 = new ListNode(2);
const node2 = new ListNode(10);

node1.next = node2;

const linkedList = new LinkedList(node1);

const first = linkedList.getFirst();
const last = linkedList.getLast();

linkedList.insertAtFront(5);
linkedList.insertAtEnd("olá!");

function traverseLinkedList () {
  let node = linkedList.getFirst();
  while (node) {
    console.log(node);
    node = node.next;
  }
}

linkedList.insertAtPosition("insertAtPos", 5)
linkedList.removeLast();
linkedList.removeFirst();

const found = linkedList.search("data");

console.log(JSON.stringify(linkedList))