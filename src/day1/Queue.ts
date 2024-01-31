type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    

    constructor() {
        this.head = undefined
        this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        this.length++

        const newNode = {
            value: item
        }

        if (!this.tail) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

    }

    deque(): T | undefined {
        if (!this.head) return undefined

        this.length--
        const head = this.head
        this.head = head.next
        head.next = undefined

        // Remember to unset the tail if we are dealing with the last item in the queue
        if (this.length === 0) {
            this.tail = undefined
        }

        return head.value
    }

    peek(): T | undefined {
        if (this.head) return this.head.value
        return undefined
    }

}