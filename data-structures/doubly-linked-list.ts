export class ListNode {
  data: unknown;
  prev: ListNode | null;
  next: ListNode | null;

  constructor(
    data: unknown,
    prev: ListNode | null = null,
    next: ListNode | null = null
  ) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  size: number = 0;

  constructor(head: ListNode | null = null) {
    this.head = head;
    this.tail = head;
    this.size = 1;
  }

  incrementSize(): void {
    this.size++;
  }

  decrementSize(): void {
    this.size--;
  }

  insertAtFront(data: unknown): void {
    if (this.head === null) {
      this.createFirstNodeToEmptyList(data);
      return;
    }

    const oldHead = this.head;
    const newHead = new ListNode(data, null, oldHead);
    this.head = newHead;
    oldHead.prev = this.head;

    this.incrementSize();
  }

  insertAtEnd(data: unknown): void {
    if (this.head === null) {
      this.createFirstNodeToEmptyList(data);
      return;
    }

    const oldTail = this.tail;
    const newTail = new ListNode(data, oldTail, null);

    this.tail = newTail;
    oldTail!.next = this.tail;

    this.incrementSize();
  }

  insertAtPos(data: unknown, position: number): void {
    if (this.head === null) {
      this.createFirstNodeToEmptyList(data);
      return;
    }

    if (position === 1) {
      this.insertAtFront(data);
      return;
    }

    let node = this.head;

    for (let i = 1; i < position; i++) {
      if (!node.next) {
        throw new Error("Invalid position: Position exceeds list size");
      }

      node = node.next;
    }

    if (!node) {
      return;
    }

    const newNode = new ListNode(data, node.prev, node);

    if (node.prev) {
      node.prev.next = newNode;
    }

    node.prev = newNode;

    this.incrementSize();
  }

  search(data: unknown): ListNode | null {
    if (this.head === null) return null;

    let node: ListNode | null = this.head;

    while (node !== null) {
      if (node.data === data) return node;

      node = node.next;
    }

    return null;
  }

  removeAtFront(): void {
    if (this.head === null) return;

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }

    this.decrementSize();
  }

  removeAtEnd(): void {
    if (this.head === null || this.tail === null) return;

    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    }

    this.decrementSize();
  }

  removeAtPosition(position: number): void {
    if (this.head === null) return;

    if (position === 1) {
      this.removeAtFront();
      return;
    }

    let node = this.head;

    for (let i = 1; i < position; i++) {
      if (!node.next) {
        throw new Error("Invalid position: Position exceeds list size");
      }

      node = node.next;
    }

    if (node === null) return;

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    this.decrementSize();
  }

  /** Reverses the linked list in an iterative manner. */ //Time: O(n) -> Space: O(1)
  reverse1(): void {
    let current: ListNode | null = this.head;
    let temp: ListNode | null = null;

    while (current !== null) {
      temp = current.next;

      current.next = current.prev;
      current.prev = temp;

      this.head = current;
      current = temp;
    }
  }

  private createFirstNodeToEmptyList(data: unknown): ListNode | null {
    const node = new ListNode(data);
    this.head = node;
    this.tail = node;
    this.size = 1;

    return this.head;
  }
}

function traverseLinkedListFromHeadToTail(head: ListNode | null = null) {
  if (head === null) return;

  let node: ListNode | null = head;
  while (node !== null) {
    console.log(node);
    node = node.next;
  }
}

const node1 = new ListNode("node1");

const doublyLinkedList = new DoublyLinkedList(node1);

doublyLinkedList.insertAtFront("testNewHead");
doublyLinkedList.insertAtEnd("testNewTail");

doublyLinkedList.insertAtPos("test", 1);

console.log("----------BEFORE REVERSE-------------");
traverseLinkedListFromHeadToTail(doublyLinkedList.head);

console.log("----------AFTER REVERSE-------------");
doublyLinkedList.reverse1();
traverseLinkedListFromHeadToTail(doublyLinkedList.head);
