export function getDate() {
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

export function getTime() {
  const currentDate = new Date();
  const hour24Format = currentDate.getHours();
  const hour12Format = hour24Format < 12 ? hour24Format : hour24Format - 12;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const appendix = hour24Format < 12 ? "AM" : "PM";
  return { hour24Format, hour12Format, minutes, seconds, appendix };
}
