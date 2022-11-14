export function createChild(parentElementTag, newElementTag, newElementId) {
	const parentElement = document.querySelector(parentElementTag);
	const newElement = document.createElement(newElementTag);
	parentElement.appendChild(newElement);
	if (newElementId) {
	parentElement.lastChild.id = newElementId;
	}
};
