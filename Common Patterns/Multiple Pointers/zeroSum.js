/**
 * Given ascending sorted array of numbers return a pair of elements that sums to zero.
 */

function zeroSum(arr) {
  //console.log([arr[0], arr[1]]);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    console.log(arr[left], arr[right]);
    if (arr[left] + arr[right] == 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
console.log(zeroSum([-5, -4, -3, -2, 1, 2, 7, 6, 8, 9]));
