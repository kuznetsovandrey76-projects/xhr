"use strict"

function loadFile(url) {
	return new Promise( function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', function() {
			resolve('Можно передать один объект');
		});
	}); 
}

var button = document.querySelector('#button');
var outer = document.querySelector('#outer');

button.addEventListener('click', function() {
	loadFile('data.txt')
		.then( function(value) {
			console.log('Принятый объект:', value);
		});
});