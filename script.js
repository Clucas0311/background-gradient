const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');

color1.addEventListener('input', function() {
	console.log(color1.value);
});
color2.addEventListener('input', function() {
	console.log(color2.value);
});
