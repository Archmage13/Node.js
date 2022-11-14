function getTime() {
  const date = new Date();

  const hour24 = date.getHours();
  const hour12 = hour24 < 12 ? hour24 : hour24 - 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const appendix = hour24 < 12 ? "AM" : "PM";

  return { hour24, hour12, minutes, seconds, appendix };
}

export { getTime };
