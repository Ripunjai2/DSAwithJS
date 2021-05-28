/**
 * The largest/smallest value will pop to the top in every pass of the loop and we repeat the same process for the remaining items.
 * We keep comparing with the adjacent element untill we reach the end for every pass.
 * With a little change, this is good option if we have almost sorted array.
 */

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  let noSwaps = true;
  let n = arr.length - 1;
  for (i = n; i >= 0; i--) {
    for (j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) return arr; // in case of almost sorted array, if we get sorted array after only few passes, then we can simply return rather than keep going uselessly.
  }
  return arr;
}

console.log(bubbleSort([8, 4, 9, 4, 3, 2, 1, 7, 6, 12, 100, 13, 1, 77]));
