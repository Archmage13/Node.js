function getDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const date = currentDate.getDate();
  const dayIndex = currentDate.getDay();
  const month = monthNames[monthIndex];
  const dayName = dayNames[dayIndex];
  return { year, month, monthIndex, date, dayIndex, dayName };
}

function getTime() {
  const currentDate = new Date();
  const hour24Format = currentDate.getHours();
  const hour12Format = hour24Format < 12 ? hour24Format : hour24Format - 12;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const appendix = hour24Format < 12 ? "AM" : "PM";
  return { hour24Format, hour12Format, minutes, seconds, appendix };
}

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

function triangleArea(side1, side2, side3) {
  const perimeter = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(
    perimeter *
      ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
  );
  return area;
}

function isLeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
  ) {
    return true;
  }
  return false;
}
