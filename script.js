function mincost(arr) {
    // Convert the input array to a min heap
    arr = heapify(arr);

    // Initialize the total cost
    let totalCost = 0;

    // Continue until there is only one rope left
    while (arr.length > 1) {
        // Extract the two smallest ropes from the heap
        const rope1 = extractMin(arr);
        const rope2 = extractMin(arr);

        // Calculate the cost of connecting the two ropes
        const cost = rope1 + rope2;

        // Add the cost to the total
        totalCost += cost;

        // Put the new rope back into the heap
        insert(arr, cost);
    }

    return totalCost;
}

// Helper function to convert an array to a min heap
function heapify(arr) {
    return arr.reduce((heap, rope) => {
        insert(heap, rope);
        return heap;
    }, []);
}

// Helper function to insert an element into a min heap
function insert(heap, value) {
    heap.push(value);
    let index = heap.length - 1;

    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[index] < heap[parentIndex]) {
            // Swap the current element with its parent
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
        } else {
            break;
        }
    }
}

// Helper function to extract the minimum element from a min heap
function extractMin(heap) {
    if (heap.length === 0) {
        return undefined;
    }

    const minValue = heap[0];

    // Replace the root with the last element
    heap[0] = heap.pop();

    // Heapify down to maintain the heap property
    let index = 0;
    while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestChildIndex = index;

        if (leftChildIndex < heap.length && heap[leftChildIndex] < heap[smallestChildIndex]) {
            smallestChildIndex = leftChildIndex;
        }

        if (rightChildIndex < heap.length && heap[rightChildIndex] < heap[smallestChildIndex]) {
            smallestChildIndex = rightChildIndex;
        }

        if (smallestChildIndex !== index) {
            // Swap the current element with the smallest child
            [heap[index], heap[smallestChildIndex]] = [heap[smallestChildIndex], heap[index]];
            index = smallestChildIndex;
        } else {
            break;
        }
    }

    return minValue;
}

// Export the mincost function
module.exports = mincost;
