"use strict";

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
};

Clock();

const updateTime = setInterval(Clock, 1000);