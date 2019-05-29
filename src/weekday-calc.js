export function getUserDate(dateInput) {
  let dateNumber = dateInput.getUTCDay();
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

// const weekDays = [];
// weekDays.push(
//   {  int: 0,  day: "Monday"  }
//   {  int: 1,  day: "Tuesday"  }
//   {  int: 2,  day: "Wednesday"  }
//   {  int: 3,  day: "Thursday"  }
//   {  int: 4,  day: "Friday"  }
//   {  int: 5,  day: "Saturday"  }
//   {  int: 6,  day: "Sunday"  }
// );
