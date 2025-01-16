function partition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];
    let left = low;
    let right = high;
    while (true) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left >= right) {
            return right;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

function quicksort(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quicksort(arr, low, pivotIndex);
        quicksort(arr, pivotIndex + 1, high);
    }
}