/**
 * We select the smallest/largest element in every pass and put it at the start/end.
 */

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (i != minIndex) swap(arr, i, minIndex); // if that element is already at its correct position, it wouldn't unnecessarily call swap function. However, that doesnot gonna make any difference to the overall time complexity and it will still be O(N).
  }
  return arr;
}

console.log(selectionSort([8, 4, 9, 4, 3, 2, 5, 1, 7, 6, 12, 100, 13, 1, 77]));
//console.log(selectionSort([1, 3, 2, 4, 5, 6, 7, 8, 9, 10]));
