let userChoice = confirm('Do you want to play a game?');
if (userChoice === false) {
  alert('You did not become a billionaire, but can.');
}
let userInteger;
let min = 0;
let max = 8;
let prize= 0;
let totalPrize = 0;
let possiblePrize = 100;
let magnifierPossiblePrize = 2;
let magnifierPrize = 2;
let magnifierRange = 4;
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 20;
let iteration1 = 3;
let iteration2 = 2;
let iteration3 = 1; 
while (userChoice === true) {
  let randomInteger = Math.floor(min + Math.random() * (max + 1 - min));
  let loopCounter = 4;
  let iterationsQuantity = 3;
  for (let i = 0; i<iterationsQuantity; i++) {
    loopCounter--;
    if(loopCounter === iteration1) {
      prize = firstPrize;
    }
    if(loopCounter === iteration2) {
      prize = secondPrize;
    }
    if(loopCounter === iteration3) {
      prize = thirdPrize;
    }
    userInteger = +prompt('Choose a roulette pocket number from '+ min + ' to ' + max
     +'\n'+ 'Attempts left: ' + loopCounter 
     +'\n'+ 'Total prize: '+ totalPrize + '$'
     +'\n'+ 'Possible prize on current attempt: '+ possiblePrize + '$');
    if (userInteger === randomInteger || userInteger === null) {
      break;
    }
  }
  if (userInteger === randomInteger) {
    alert('Congratulation, you won! Your prize is: '+prize+ '$')
    userChoice = confirm('Do you want to play again?');
    if(userChoice === true) {
      max += magnifierRange;
      totalPrize += prize;
      firstPrize *= magnifierPrize;
      secondPrize *= magnifierPrize;
      thirdPrize *= magnifierPrize;
      possiblePrize *= magnifierPossiblePrize;
    } else {
      alert('Thank you for your participation. Your prize is: '+prize+ '$')
    }
  } else {
    alert('Thank you for your participation. Your prize is: '+totalPrize+ '$')
    userChoice = confirm('Do you want to play again?');
  }
}
