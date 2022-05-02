"use strict";

let body = document.body;

const addZeros = number => {
	if (number.toString().length < 2) return "0".concat(number);
	return number;	
};

const Clock = ()=> {
	let time = new Date();
	let hours = addZeros(time.getHours());
	let minutes = addZeros(time.getMinutes());
	let seconds = addZeros(time.getSeconds());
	document.querySelector(".hours").textContent = hours;
	document.querySelector(".minutes").textContent = minutes;
	document.querySelector(".seconds").textContent = seconds;
	if (hours > '05' && hours < '07') body.style.backgroundColor = '#F98577';
	else if (hours > '07' && hours < '17') body.style.backgroundColor = '#51BEF3';
	else if (hours > '17' && hours < '19') body.style.backgroundColor = '#F38951';
	else body.style.backgroundColor = '#222';
};

Clock();

const updateTime = setInterval(Clock, 1000);