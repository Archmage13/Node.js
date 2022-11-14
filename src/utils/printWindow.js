import { createChild } from './createChild.js';

export function printWindow() {
	createChild('main', 'button', 'btn-print');
	const printButton = document.querySelector('#btn-print');
	printButton.innerText = 'Print this page';
	printButton.addEventListener('click', () => {
		window.print();
	});
};
