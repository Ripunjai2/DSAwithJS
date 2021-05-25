/**
 * Given two strings, determine whether the second string is an anagram of the first one.
 */

//Solution 1- A little messy, but has O(n)
function anagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let freq1 = {};
  let freq2 = {};
  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  console.log(freq1);
  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }
  console.log(freq2);
  if (freq1.length != freq2.length) return false;

  for (let key of str1) {
    if (freq1[key] != freq2[key]) return false;
  }
  return true;
}

console.log(anagram('RipunjaiRai', 'RaijaipuniR'));
