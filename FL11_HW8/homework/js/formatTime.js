function formatTime(quantityOfMinutes) {
  let days = 0;
  let minutes = 0;
  let hours = 0;
  let remainderOfTheDivision = 0;
  let quantityOfMinutesInOneDay = 1440;
  let quantityOfMinutesInOneHours = 60;
  if ((quantityOfMinutes / quantityOfMinutesInOneDay) ^ (0 === true)) {
    let quantityOfDays = (quantityOfMinutes / quantityOfMinutesInOneDay) >> 0;
    days = quantityOfDays;
    remainderOfTheDivision = quantityOfMinutes % quantityOfMinutesInOneDay;
    if ((remainderOfTheDivision / quantityOfMinutesInOneHours) ^ (0 === true)) {
      let quantityOfHours =
        (remainderOfTheDivision / quantityOfMinutesInOneHours) >> 0;
      hours = quantityOfHours;
      minutes = quantityOfMinutes % quantityOfMinutesInOneHours;
    }
  } else {
    remainderOfTheDivision = quantityOfMinutes % quantityOfMinutesInOneDay;
    if ((remainderOfTheDivision / quantityOfMinutesInOneHours) ^ (0 === true)) {
      let quantityOfHours =
        (remainderOfTheDivision / quantityOfMinutesInOneHours) >> 0;
      hours = quantityOfHours;
      minutes = quantityOfMinutes - quantityOfHours * 60;
    } else {
      minutes = remainderOfTheDivision;
    }
  }
  return (
    days + " day(s), " + hours + " hour(s), " + minutes + " minute(s).");
}
console.log(formatTime(120));