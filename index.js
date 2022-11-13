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

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedHour = hour >= 0 && hour < 12 ? `${hour} AM` : `${hour - 12} PM`;

  return { hour, minutes, seconds, formattedHour };
}

const { weekday, day, month, year } = getDate();
const { minutes, seconds, formattedHour } = getTime;

console.log(`Today is: ${weekday}, ${day} ${month} ${year}`);
console.log(`Current time is: ${formattedHour}:${minutes}:${seconds}`);