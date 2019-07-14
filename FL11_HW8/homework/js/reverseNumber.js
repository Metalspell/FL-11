function reverseNumber(x) {
  let result = 0;
  let flag = false;
  if (x < 0) {
    x *= -1;
    flag = true;
  }
  for (; x; x = Math.floor(x / 10)) {
    result *= 10;
    result += x % 10;
  }
  if (flag === true) {
    result *= -1;
  }
  return result;
}
console.log(reverseNumber(-456666));