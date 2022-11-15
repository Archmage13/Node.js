import { getDate, getTime } from "./src/utils/date";
import triangleArea from "./src/utils/geometry";

function displayTime() {
  const { dayName, date, month, year } = getDate();
  const { minutes, seconds, hour12Format, appendix } = getTime();
  return `Today is: ${dayName}, ${month} ${date} ${year}
Current time is: ${hour12Format}:${minutes}:${seconds} ${appendix}`;
}

function displayDate() {
  const { date, monthIndex, year } = getDate();
  const yearLastDigits = `${year}`.slice(-2);
  return `${monthIndex + 1}/${date}/${yearLastDigits}`;
}

console.log(displayTime());
console.log(displayDate());
console.log(triangleArea(5, 6, 7));
