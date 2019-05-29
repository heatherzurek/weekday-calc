export function getUserDate(Date) {
  let dateNumber = .getDay(dateInput);
  let dayOfTheWeek = "";
  if (dateNumber === 0) {
    dayOfTheWeek = "Sunday";
  }
  if (dateNumber === 1) {
    dayOfTheWeek = "Monday";
  }
  if (dateNumber === 2) {
    dayOfTheWeek = "Tuesday";
  }
  if (dateNumber === 3) {
    dayOfTheWeek = "Wednesday";
  }
  if (dateNumber === 4) {
    dayOfTheWeek = "Thursday";
  }
  if (dateNumber === 5) {
    dayOfTheWeek = "Friday";
  }
  if (dateNumber === 6) {
    dayOfTheWeek = "Saturday";
  }
  return dayOfTheWeek;
}
