// https://stackoverflow.com/a/44089923/818054
document.body.addEventListener('DOMSubtreeModified', function(event) {
	const elements = document.getElementsByClassName("react-notification-root");
	while (elements.length > 0) elements[0].remove();
});