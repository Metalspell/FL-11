function addOne(arg) {
  return 1 + arg;
}
function pipe(arg) {
  for (let i = 1; i < arguments.length; i++) {
    arg = arguments[i](arg);
  }
  return arg;
}
console.log(pipe(1, addOne, addOne));
