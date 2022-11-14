import { getDate, getTime } from './date.js';

export function displayTime() {
	const { weekday, day, month, year } = getDate();
	const { minutes, seconds, hour12, appendix } = getTime();
	return `Today is: ${weekday}, ${day} ${month} ${year}
Current time is: ${hour12}:${minutes}:${seconds} ${appendix}`;
};
