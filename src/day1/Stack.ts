// Solution using next?: Node<T>
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
        const newNode = { value: item } as Node<T>

        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
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


// Solution using prev?: Node<T>
// type Node<T> = {
//     value: T,
//     prev?: Node<T>
// }

// export default class Stack<T> {
//     public length: number;
//     private head?: Node<T>
    

//     constructor() {
//         this.head = undefined
//         this.length = 0
//     }

//     push(item: T): void {
//         this.length++
//         const newNode = { value: item } as Node<T>

//         if (!this.head) {
//             this.head = newNode
//         } else {
//             newNode.prev = this.head
//             this.head = newNode
//         }
//     }

//     pop(): T | undefined {
//         if (!this.head) return

//         this.length--
//         const head = this.head
//         this.head = head.prev

//         return head.value
//     }

//     peek(): T | undefined {
//         return this.head?.value
//     }
// }