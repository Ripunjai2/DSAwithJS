/**
 * Best and Avg time complexity- O(N logN)
 * Worst time complexity- O(N*N )
 */

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, left, right) {
  let swapIndex = left;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[left]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      //console.log(arr, 'in', i);
    }
  }
  swap(arr, swapIndex, left);
  //console.log(arr, 'out');
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([8, 4, 9, 4, 3, 2, 1, 7, 6, 12, 100, 13, 1, 77]));
//console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
