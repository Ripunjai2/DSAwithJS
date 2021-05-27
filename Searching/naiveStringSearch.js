/**
 * Given a string, check whether it has a given substring(pattern) or not.
 */
function naiveSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length - pattern.length; i++) {
    flag = true;
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] != pattern[j]) {
        flag = false;
        break;
      }
    }
    //if(j==pattern.length-1) count++; //this would not require a flag variable to be used separately.
    if (flag == true) count++;
  }
  return count;
}

console.log(naiveSearch('Hi this is me who is who', 'isi'));
