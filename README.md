# priority-queue

An implementation of a priority queue in JavaScript. The implementation uses a
binary min heap. Accessing the front of the queue takes O(1) time. Adding
elements to and removing the smallest element from the queue both take O(log n)
time.

## Installation

    npm install https://github.com/ejpbruel/priority-queue.git

## Usage

    // Creating a new priority queue.
    var queue = new PriorityQueue(function (a, b) {
      return a - b;
    });

    // Adding elements to the queue.
    queue.enqueue(2);
    queue.enqueue(0);
    queue.enqueue(1);

    // Removing the smallest element from the queue.
    queue.dequeue(); // 0

    // Accessing the size of the queue.
    queue.size; // 3

    // Accessing the front of the queue.
    queue.front; // 1

    // Removing all elements from the queue.
    queue.clear();
## License

MIT
