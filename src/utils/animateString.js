export default function animateString(element) {
  let text = element.innerText;
  const lastCharacter = text.length - 1;
  setInterval(() => {
    text = `${text[lastCharacter]}${text.substring(0, lastCharacter)}`;
    element.innerText = text;
  }, 100);
}
