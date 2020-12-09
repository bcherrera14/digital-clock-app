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

let month = '';
let dayOfWeek = '';
let day = '';
let year = '';
let hours = null;
let hoursMilitary = null;
let hoursString = '';
let minutes = '';
let secondsNumeral = null;
let secondsString = '';
let universalTimeDifference = null;
let period = '';

function initiateDate(dateData, monthNames, weekdays) {
	console.log('Date: ');
	month = monthNames[dateData.getMonth()];
	console.log(month);
	dayOfWeek = weekdays[dateData.getUTCDay()];
	day = dateData.getDate().toString().padStart(2, '0');
	console.log(day);
	console.log(dayOfWeek);
	year = dateData.getFullYear().toString();
	console.log(year);

	console.log('Time: ');
	//hours = dateData.getHours().toString().padStart(2, '0');
	hours = dateData.getHours() > 12 ? dateData.getHours() - 12 : dateData.getHours();
	hoursString = hours.toString().padStart(2, '0');
	hoursMilitary = dateData.getHours().toString().padStart(2, '0');
	minutes = dateData.getMinutes().toString().padStart(2, '0');
	secondsNumeral = dateData.getSeconds();
	secondsString = secondsNumeral.toString().padStart(2, '0');
	universalTime = dateData.getUTCHours();
	universalTimeDifference = universalTime - dateData.getHours();
	period = universalTime - universalTimeDifference >= 12 ? 'PM' : 'AM';
	console.log(hours);
	console.log(hoursMilitary);
	console.log(minutes);
	console.log(secondsNumeral.toString().padStart(2, '0'));
	console.log(period);
}

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

initiateDate(dateData, monthNames, weekdays);
setTime(hoursString, minutes, secondsString);
setDate(dayOfWeek, month, day);

setInterval(function() {
	secondsNumeral += 1;
	if (secondsNumeral === 60) {
		initiateDate(new Date(), monthNames, weekdays);
	}
	secondsString = secondsNumeral.toString().padStart(2, '0');
	setTime(hoursString, minutes, secondsString);
}, 1000);
