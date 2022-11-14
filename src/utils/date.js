function getDate() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
  const appendix = hour24 < 12 ? 'AM' : 'PM';
  return { hour24, hour12, minutes, seconds, appendix };
};

export function displayTime() {
	const { weekday, day, month, year } = getDate();
	const { minutes, seconds, hour12, appendix } = getTime();
	return `Today is: ${weekday}, ${month} ${day} ${year}
Current time is: ${hour12}:${minutes}:${seconds} ${appendix}`;
};

export function displayDate() {
	const { day, monthIndex, year } = getDate();
	const yearDigits = `${year}`.slice(-2);
	return `${monthIndex + 1}/${day}/${yearDigits}`;
};
