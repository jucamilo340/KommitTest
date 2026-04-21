export interface DLLNode<T> {
  value: T;
  prev: DLLNode<T> | null;
  next: DLLNode<T> | null;
}

function createNode<T>(value: T): DLLNode<T> {
  return { value, prev: null, next: null };
}

export class DoublyLinkedList<T> {
  head: DLLNode<T> | null = null;
  tail: DLLNode<T> | null = null;
  private _size: number = 0;

  get size(): number {
    return this._size;
  }

  insertHead(value: T): void {
    const node = createNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this._size++;
  }

  insertTail(value: T): void {
    const node = createNode(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this._size++;
  }

  private getNodeAtIndex(index: number): DLLNode<T> | null {
    if (index < 0 || index >= this._size) return null;

    let current: DLLNode<T> | null;

    if (index <= this._size / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
    } else {
      current = this.tail;
      for (let i = this._size - 1; i > index; i--) {
        current = current!.prev;
      }
    }

    return current;
  }

  private removeNode(node: DLLNode<T>): T {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;
    this._size--;

    return node.value;
  }

  removeAtIndex(index: number): T | null {
    const node = this.getNodeAtIndex(index);
    if (!node) return null;
    return this.removeNode(node);
  }

  removeDuplicates(): void {
    if (!this.head) return;

    const seen = new Set<T>();
    let current: DLLNode<T> | null = this.head;

    while (current) {
      const next:any = current.next;

      if (seen.has(current.value)) {
        this.removeNode(current);
      } else {
        seen.add(current.value);
      }

      current = next;
    }
  }

  search(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }
}