function getDate() {
   const date = new Date();

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const dayIndex = date.getDay();

  const monthNames = ["January", "Frebuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const month = monthNames[monthIndex];
  const weekday = weekdays[dayIndex];

  return { year, month, monthIndex, day, dayIndex, weekday };
};

const { weekday, day, month, year } = getDate();

console.log(`Today is ${weekday}, ${day} ${month} ${year}`);