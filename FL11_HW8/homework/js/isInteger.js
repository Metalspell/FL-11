function isInteger(x) {
  return (x ^ 0) === x;
}
console.log(isInteger(5.5));