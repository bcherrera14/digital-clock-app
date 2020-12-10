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
let hoursStandard = '';
let hoursDisplay = '';

let minutes = '';
let secondsNumeral = null;
let secondsString = '';
let universalTimeDifference = null;
let period = '';
let displayMilitaryTime = false;

function initiateDate(dateData, monthNames) {
	month = monthNames[dateData.getMonth()];
	dayOfWeek = weekdays[dateData.getUTCDay()];
	day = dateData.getDate().toString().padStart(2, '0');
	year = dateData.getFullYear().toString();
	hours = dateData.getHours() > 12 ? dateData.getHours() - 12 : dateData.getHours();
	hoursMilitary = dateData.getHours().toString().padStart(2, '0');
	hoursStandard = hours.toString().padStart(2, '0');
	hoursDisplay = displayMilitaryTime === true ? hoursMilitary : hoursStandard;
	minutes = dateData.getMinutes().toString().padStart(2, '0');
	secondsNumeral = dateData.getSeconds();
	secondsString = secondsNumeral.toString().padStart(2, '0');
	universalTime = dateData.getUTCHours();
	universalTimeDifference = universalTime - dateData.getHours();
	period = universalTime - universalTimeDifference >= 12 ? 'PM' : 'AM';
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

function timeFormat() {
	displayMilitaryTime = !displayMilitaryTime;
	if (displayMilitaryTime === true) {
		document.getElementById('hours').innerHTML = hoursMilitary;
		document.getElementById('period').style.display = 'none';
		hoursDisplay = displayMilitaryTime === true ? hoursMilitary : hoursStandard;
		document.getElementById('buttonLabel').innerHTML = '12';
	} else if (displayMilitaryTime === false) {
		document.getElementById('hours').innerHTML = hoursStandard;
		document.getElementById('period').style.display = 'inline';

		hoursDisplay = displayMilitaryTime === true ? hoursMilitary : hoursStandard;
		document.getElementById('buttonLabel').innerHTML = '24';
	}
}

initiateDate(dateData, monthNames, weekdays);
setTime(hoursDisplay, minutes, secondsString);
setDate(dayOfWeek, month, day);

setInterval(function() {
	secondsNumeral += 1;
	if (secondsNumeral === 60) {
		initiateDate(new Date(), monthNames, weekdays);
	}
	secondsString = secondsNumeral.toString().padStart(2, '0');
	setTime(hoursDisplay, minutes, secondsString);
}, 1000);
