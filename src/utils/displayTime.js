import { getDate, getTime } from './date.js';

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
