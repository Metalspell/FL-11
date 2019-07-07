let a = +prompt(
  'Enter the value of a - this is length of first side of triangle'
);
let b = +prompt(
  'Enter the value of b - this is length of second side of triangle'
);
let c = +prompt(
  'Enter the value of c - this is length of third side of triangle'
);
let numberFilter = /^[0-9]*[.]?[0-9]+$/;
if (numberFilter.test(a) && numberFilter.test(b) && numberFilter.test(c)) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log('Triangle with such sides can exist');
    if (a === b && b === c && c === a) {
      console.log('Eequivalent triangle');
    }
    if (a === b && a !== c || b === c && b !== a || c === a && c !== b) {
      console.log('Isosceles triangle');
    }
    if (a !== b && b !== c && c !== a) {
      console.log('Normal triangle');
    }
  } else {
    console.log('Triangle does not exist');
  }
} else {
  console.log('Sorry,but you must enter the number only! Try again;)')
}
