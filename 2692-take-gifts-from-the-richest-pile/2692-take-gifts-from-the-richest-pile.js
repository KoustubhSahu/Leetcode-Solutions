/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
function pickGifts(gifts, k) {

    const sqrtFloor = (x) => Math.floor(Math.sqrt(x));
    maxHeap = new MaxHeap();

    for (let i = 0; i < gifts.length; i++) maxHeap.insert(gifts[i]);

    for (let i = 0; i < k; i++) {
        let max = maxHeap.getMax();
        max = sqrtFloor(max);
        maxHeap.insert(max)
    }

    return maxHeap.getHeapArr().reduce((sum, giftsInPile) => sum + giftsInPile, 0);
}


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    leftChild = (i) =>  (2*i) + 1;
    rightChild = (i) => (2*i) + 2;
    parent = (i) => Math.floor((i-1)/2);

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert (num) {
        this.heap.push(num);
        let i = this.heap.length - 1;
        let parent = this.parent(i);
        while (i > 0 && this.heap[parent] < this.heap[i]) {
            this.swap(i, parent);
            i = parent;
            parent = this.parent(i)
        }
    }
    heapify(i) {
        let largest = i;
        let left = this.leftChild(i);
        let right = this.rightChild(i);

        if (left< this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right< this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest != i) {
            this.swap(i, largest);
            this.heapify(largest);
        }
    }
    getMax() {
        let maxElement = this.heap[0]
        this.heap[0] = this.heap.at(-1);
        this.heap.pop();
        this.heapify(0);
        return maxElement;
    }

    getHeapArr = () => this.heap;

}