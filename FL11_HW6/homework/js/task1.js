let a1 = +prompt('Enter the value of a1 - this is one the edge of line');
let a2 = +prompt('Enter the value of a2 - this is one the edge of line');
let c1 = +prompt('Enter the value of c1 - this is other the edge of line');
let c2 = +prompt('Enter the value of c2 - this is other the edge of line');
let b1 = +prompt('Enter the value of b1 - this is the expected coordinate of the midpoint of the segment');
let b2 = +prompt('Enter the value of b2 - this is the expected coordinate of the midpoint of the segment');
let numberFilter = /^[0-9]*[.]?[0-9]+$/;
if (numberFilter.test(a1) && numberFilter.test(a2) && numberFilter.test(b1) 
  && numberFilter.test(b2) && numberFilter.test(c1) && numberFilter.test(c2)) {
  let devider = 2;
  let resultB1 = (a1 + c1) / devider;
  let resultB2 = (a2 + c2) / devider;
  if (b1 === resultB1 && b2 === resultB2) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Sorry,but you must enter the number only! Try again;)')
}