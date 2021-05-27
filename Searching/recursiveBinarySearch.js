function helper(start, end, arr, val) {
  mid = Math.floor((start + end) / 2);
  console.log(start, end, mid);

  if (arr[mid] === val) {
    return mid;
  }
  if (start >= end) {
    return -1;
  }
  if (arr[mid] < val) {
    return helper(mid + 1, end, arr, val);
  } else {
    return helper(start, mid - 1, arr, val);
  }
}

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  return helper(start, end, arr, val);
}
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 6));
