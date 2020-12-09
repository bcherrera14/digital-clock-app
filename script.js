let dateData = new Date();
console.log(dateData);

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

console.log('Date: ');
let month = monthNames[dateData.getMonth()];
console.log(month);
let dayOfWeek = weekdays[dateData.getUTCDay()];
let day = dateData.getDate().toString().padStart(2, '0');
console.log(day);
console.log(dayOfWeek);
let year = dateData.getFullYear().toString();
console.log(year);

console.log('Time: ');
let hours = dateData.getHours().toString().padStart(2, '0');
let minutes = dateData.getMinutes().toString().padStart(2, '0');
let secondsNumeral = dateData.getSeconds();
let secondsString = secondsNumeral.toString().padStart(2, '0');
let universalTimeDifference = dateData.getUTCHours() - dateData.getHours();
let period = dateData.getUTCHours() - universalTimeDifference >= 12 ? 'PM' : 'AM';
console.log(hours);
console.log(minutes);
console.log(seconds.toString().padStart(2, '0'));
console.log(period);
console.log(universalTimeDifference);

function setTime(hours, minutes, seconds) {
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
	document.getElementById('period').innerHTML = period;
}

function setDate(weekday, month, date) {
	document.getElementById('weekday').innerHTML = weekday;
	document.getElementById('month').innerHTML = month;
	document.getElementById('date').innerHTML = date;
}

setTime(hours, minutes, secondsString);
setDate(dayOfWeek, month, day);
