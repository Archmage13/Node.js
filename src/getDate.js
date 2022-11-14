function getDate() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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

export { getDate };
