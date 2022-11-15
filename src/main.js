import createChild from "./utils/createChild";

function printPage() {
  createChild("body", "button", "btn-print");
  const printButton = document.querySelector("#btn-print");
  printButton.innerText = "Print this page";
  printButton.addEventListener("click", () => {
    window.print();
  });
}

printPage();
