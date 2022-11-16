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
  printButton.textContent = "Print this page";
  printButton.addEventListener("click", () => {
    window.print();
  });
}

function animateString(elementId, string) {
  const element = document.querySelector(`#${elementId}`);
  let text = string;
  const lastCharacter = text.length - 1;
  setInterval(() => {
    text = `${text[lastCharacter]}${text.substring(0, lastCharacter)}`;
    element.textContent = text;
  }, 100);
}

function animatedParagraph() {
  createChild("body", "p", "p-animate");
  const paragraphId = "p-animate";
  const paragraphText = "JavaScript is awesome!";
  animateString(paragraphId, paragraphText);
}

function guessTheNumber() {
  createChild('body', 'button', 'btn-start-game');
  const startGameButton = document.querySelector('#btn-start-game');
  startGameButton.textContent = 'Start game';
  startGameButton.addEventListener('click', () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    while (true) {
      const guess = prompt('Guess the number between 1 and 10');
      if (guess === randomNumber) {
        alert('Match!');
        break;
      } else {
        alert('Wrong! Try again.');
      }
    }
  });
}

printPage();
animatedParagraph();
guessTheNumber();
