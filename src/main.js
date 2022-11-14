import { getDate, getTime } from './utils/date.js';
import { printWindow } from './utils/printWindow.js';

const { weekday, day, month, year } = getDate();
const { minutes, seconds, hour12, appendix } = getTime();

console.log(`Today is: ${weekday}, ${day} ${month} ${year}`);
console.log(`Current time is: ${hour12}:${minutes}:${seconds} ${appendix}`);

window.onload = () => {
	printWindow();
};
