"use strict"

function loadFile(url) {
	return new Promise( function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', function() {
			resolve(xhr.response);
		});
	}); 
}

var button = document.querySelector('#button');
var outer = document.querySelector('#outer');

button.addEventListener('click', function() {
	loadFile('data1.txt')
		.then( function(value) {
			console.log('Принятый объект:', value);
			outer.textContent = value;
		});

		return loadFile('data2.txt')
			.then( function(value) {				
				outer.textContent += '\n' + value;
			});
});