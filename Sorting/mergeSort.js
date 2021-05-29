/**
 *Best, Avg, Worst-O(nlogn)
 */
function merge(arr1, arr2) {
  let sortedArr = [];
  i = 0;
  j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([8, 4, 9, 4, 3, 2, 1, 7, 6, 12, 100, 13, 1, 77]));
