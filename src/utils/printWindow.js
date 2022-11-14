function createPrintButton() {
	const main = document.querySelector('main');
	const newButton = document.createElement('button');
	main.appendChild(newButton);
	main.lastChild.id = 'btn-print';
	main.lastChild.innerText = 'Print this page';
};

export function printWindow() {
	createPrintButton();
	const printButton = document.querySelector('#btn-print');
	printButton.addEventListener('click', () => {
		window.print();
	});
};
