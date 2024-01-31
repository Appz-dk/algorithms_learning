type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>
    

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        this.length++
        const newNode = { value: item }

        if (!this.head) {
            this.head = newNode
        } else {
            const head = this.head
            this.head = newNode
            this.head.next = head
        }
    }

    pop(): T | undefined {
        if (!this.head) return
        
        this.length--
        const head = this.head
        this.head = head.next

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}