/**
 * Given two arrays, find whether the second array exactly has square of every element present in first array
 */

function frequecyCounter(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  let freq1 = {};
  let freq2 = {};
  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }
  console.log(freq1);
  console.log(freq2);

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) return false;
    if (freq1[key] != freq2[key ** 2]) return false;
  }
  return true;
}

console.log(frequecyCounter([1, 3, 2, 2], [4, 1, 9, 4]));
