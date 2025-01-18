export class ListNode {
  data: unknown;
  prev: ListNode | null;
  next: ListNode | null;

  constructor(data: unknown, prev: ListNode | null = null, next: ListNode | null = null) {
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

  private createFirstNodeToEmptyList (data: unknown): ListNode | null {
    const node = new ListNode(data);
    this.head = node;
    this.tail = node;
    this.size = 1;

    return this.head;
  }
}

function traverseLinkedListFromHeadToTail (head: ListNode | null = null) {
  if (head === null) return;

  let node: ListNode | null = head;
  while (node !== null) {
    console.log(node);
    node = node.next;
  }
}

function traverseLinkedListFromTailToHead (tail: ListNode | null = null) {
  if (tail === null) return;

  let node: ListNode | null = tail;
  while (node !== null) {
    console.log(node);
    node = node.prev;
  }
}

const node1 = new ListNode("node1");

const doublyLinkedList = new DoublyLinkedList(node1);

doublyLinkedList.insertAtFront("testNewHead");
doublyLinkedList.insertAtEnd("testNewTail");

// traverseLinkedListFromTailToHead(tail);

doublyLinkedList.insertAtPos("test", 2)
traverseLinkedListFromHeadToTail(doublyLinkedList.head);

console.log(doublyLinkedList.size)