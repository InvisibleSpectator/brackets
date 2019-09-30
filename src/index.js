module.exports = function check(str, bracketsConfig) {
  let i = 0;
  while (i < str.length) {
    let j = 0;
    while (!bracketsConfig[j].includes(str[i]))
      j++;
    if (bracketsConfig[j][0] == str[i] && bracketsConfig[j][1] == str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2);
      i--;
      if (i < 0)
      i = 0;
    }
    else
      i++;    
  }
  return str.length == 0;
}
