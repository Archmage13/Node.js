import { getDate, getTime } from "./src/utils/date.js";
import { triangleArea } from "./src/utils/geometry.js";

function displayTime() {
  const { weekday, day, month, year } = getDate();
  const { minutes, seconds, hour12, appendix } = getTime();
  return `Today is: ${weekday}, ${month} ${day} ${year}
Current time is: ${hour12}:${minutes}:${seconds} ${appendix}`;
}

function displayDate() {
  const { day, monthIndex, year } = getDate();
  const yearDigits = `${year}`.slice(-2);
  return `${monthIndex + 1}/${day}/${yearDigits}`;
}

console.log(displayTime());
console.log(displayDate());
console.log(triangleArea(5, 6, 7));
