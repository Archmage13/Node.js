import createChild from "./utils/createChild";
import animateString from "./utils/animateString";

function printPage() {
  createChild("body", "button", "btn-print");
  const printButton = document.querySelector("#btn-print");
  printButton.innerText = "Print this page";
  printButton.addEventListener("click", () => {
    window.print();
  });
}

function animatedParagraph() {
  createChild("body", "p", "p-animate");
  const paragraph = document.querySelector("#p-animate");
  paragraph.innerText = "JavaScript is awesome!";
  animateString(paragraph);
}

printPage();
animatedParagraph();
