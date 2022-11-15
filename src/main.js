function createChild(parentElementTag, newElementTag, newElementId) {
  const parentElement = document.querySelector(parentElementTag);
  const newElement = document.createElement(newElementTag);
  parentElement.appendChild(newElement);
  if (newElementId) {
    parentElement.lastChild.id = newElementId;
  }
}

function printPage() {
  createChild("body", "button", "btn-print");
  const printButton = document.querySelector("#btn-print");
  printButton.innerText = "Print this page";
  printButton.addEventListener("click", () => {
    window.print();
  });
}

function animateString(element) {
  let text = element.innerText;
  const lastCharacter = text.length - 1;
  setInterval(() => {
    text = `${text[lastCharacter]}${text.substring(0, lastCharacter)}`;
    element.innerText = text;
  }, 100);
}

function animatedParagraph() {
  createChild("body", "p", "p-animate");
  const paragraph = document.querySelector("#p-animate");
  paragraph.innerText = "JavaScript is awesome!";
  animateString(paragraph);
}

printPage();
animatedParagraph();
