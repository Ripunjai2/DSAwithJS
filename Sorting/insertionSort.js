/**
 * Builds up the sort by gradually creating left portion which is always sorted.
 * This along with bubble sort performs well when data is almost sorted.
 * This is a good option when data is coming continuosly and we need to maintain the sorted sequence
 */

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([8, 4, 9, 4, 3, 2, 5, 1, 7, 6, 12, 100, 13, 1, 77]));
