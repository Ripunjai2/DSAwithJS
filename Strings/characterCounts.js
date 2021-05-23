function charCounts(str) {
  var res = {};
  for (i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
      var char = str.charAt(i).toLowerCase();
      console.log('test1');
      if (res[char] > 0) {
        res[char]++;
      } else {
        res[char] = 1;
      }
    }
  }
  console.log(res.values);
  return res;
}

console.log(charCounts('hello 12heiH23!@'));
