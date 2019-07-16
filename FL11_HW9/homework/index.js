// Task 0
function getNumbers(value) {
  let result = [];
  let strToArr = value.split('');
  for (let i = 0; i < strToArr.length; i++) {
    strToArr[i] = parseInt(strToArr[i]);
    if (isNaN(strToArr[i]) === false) {
      result.push(strToArr[i]);
    }
  }
  return result;
}
console.log(getNumbers('n1um3ber95'));

// Task 1
function findTypes() {
  let result = {};
  let objCounter = 0;
  let numCounter = 0;
  let strCounter = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      numCounter++;
      result['number'] = numCounter;
    } else if (typeof arguments[i] === 'string') {
      strCounter++;
      result['string'] = strCounter;
    } else if (typeof arguments[i] === 'object') {
      objCounter++;
      result['object'] = objCounter;
    }
  }
  return result;
}
// console.log(findTypes(null, null, null, 5, 'str', 6, 'smthng'));

// Task 2
function executeForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
// executeForEach([1, 2, 3, 10], function(el) {
//   console.log(el);
// });

// Task 3
function mapArray(arr, func) {
  let newArr = [];
  executeForEach(arr, function(some) {
    newArr.push(func(some));
  });
  return newArr;
}
// console.log(
//   mapArray([2, 5, 4, 10, 2, 1, 8], function(el) {
//     return el + 3;
//   })
// );

// Task 4
function filterArray(arr, func) {
  let filteredArr = [];
  executeForEach(arr, function(some) {
    if (func(some)) {
      filteredArr.push(some);
    }
  });
  return filteredArr;
}
// console.log(
//   filterArray([2, 5, 8], function(el) { 
//     return el > 3; 
//   })
// ); 

// Task 5
  function showFormattedDate (value) {
  let arrayOfMounth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  let mounthDefinition = arrayOfMounth[value.getMonth()];
  let dateDefinition = value.getDate();
  let yearDefinition = value.getFullYear();
  return 'Date: ' + mounthDefinition + ' ' + dateDefinition + ' ' + yearDefinition;
}
// console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));  

// Task 6
function canConvertToDate(value) {
  return !isNaN(Date.parse(value));
}
// console.log(canConvertToDate('2016-03-18T00:00:00'));

// Task 7
function daysBetween(firstDate, secondDate) {
  let result = 0;
  let quantityOfMsInOneDay = 86400000;
  if (firstDate < secondDate) {
    result = Math.round((secondDate - firstDate) / quantityOfMsInOneDay);
  } else {
    result = Math.round((firstDate - secondDate) / quantityOfMsInOneDay);
  }
  return result;
}
// console.log(
//   daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))
// );

// Task 8
  let humanSpecifications = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    ' birthday ': '2016-03-18T00:00:00',
    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple'
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    ' birthday ': '1991-02-11T00:00:00',
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry'
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    ' birthday ': '1984-04-17T00:00:00',
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple'
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    ' birthday ': '1994-04-17T00:00:00',
    eyeColor: 'green',
    name: 'George',
    favoriteFruit: 'banana'
  }
];
function getAmountOfAdultPeople(value) {
  let frontier = 18;
  let quantityOfDayInTheYear = 365;
  let filteredArr = [];
  filteredArr = filterArray(value, function (some) {
    if (daysBetween(Date.now(), new Date(some[' birthday '])) > frontier * quantityOfDayInTheYear) {
      return true;
    }
  });
  let olderThan18 = filteredArr.length;
  return olderThan18;
}
// console.log(getAmountOfAdultPeople(humanSpecifications))

// Task 9
function keys() {
  let arrOfKeys = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        arrOfKeys.push(key);
      }
    }
  }
  return arrOfKeys;
}
// console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

// Task 10
function values() {
  let arrOfKeys = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        arrOfKeys.push(arguments[i][key]);
      }
    }
  }
  return arrOfKeys;
}
// console.log(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
