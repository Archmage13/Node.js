function getDate() {
  const monthNames = ["January", "Frebuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const date = new Date();

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const dayIndex = date.getDay();

  const month = monthNames[monthIndex];
  const weekday = weekdays[dayIndex];

  return { year, month, monthIndex, day, dayIndex, weekday };
};

function getTime() {
  const date = new Date();

  const hour24 = date.getHours();
  const hour12 = hour24 < 12 ? hour24 : hour24 - 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const appendix = hour24 < 12 ? "AM" : "PM";

  return { hour24, hour12, minutes, seconds, appendix };
}

const { weekday, day, month, year } = getDate();
const { minutes, seconds, hour12, appendix } = getTime();

console.log(`Today is: ${weekday}, ${day} ${month} ${year}`);
console.log(`Current time is: ${hour12}:${minutes}:${seconds} ${appendix}`);