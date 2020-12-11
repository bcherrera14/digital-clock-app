let dateData = new Date();

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

let month;
let dayOfWeek;
let day;
let hours;
let hoursMilitary;
let hoursStandard;
let hoursDisplay;
let minutes;
let seconds;
let secondsDisplay;
let milliseconds;
let universalTimeDifference;
let period;
let displayMilitaryTime = false;

function initiateDate(dateData) {
	month = monthNames[dateData.getMonth()];
	dayOfWeek = weekdays[dateData.getDay()];
	day = dateData.getDate().toString().padStart(2, '0');
}

function initiateTime(dateData) {
	hours = dateData.getHours() > 12 ? dateData.getHours() - 12 : dateData.getHours();
	hours = hours === 0 ? hours + 12 : hours;
	hoursMilitary = dateData.getHours().toString().padStart(2, '0');
	hoursStandard = hours.toString().padStart(2, '0');
	hoursDisplay = displayMilitaryTime === true ? hoursMilitary : hoursStandard;
	minutes = dateData.getMinutes().toString().padStart(2, '0');
	seconds = dateData.getSeconds();
	seconds = seconds === 60 ? 0 : seconds;
	secondsDisplay = seconds.toString().padStart(2, '0');
	universalTime = dateData.getUTCHours();
	universalTimeDifference = universalTime - dateData.getHours();
	period = universalTime - universalTimeDifference >= 12 ? 'PM' : 'AM';
}

function displayTime(hours, minutes, seconds) {
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
	document.getElementById('period').innerHTML = period;
}

function displayDate(weekday, month, date) {
	document.getElementById('weekday').innerHTML = weekday;
	document.getElementById('month').innerHTML = month;
	document.getElementById('date').innerHTML = date;
}

function timeFormat() {
	displayMilitaryTime = !displayMilitaryTime;
	if (displayMilitaryTime === true) {
		document.getElementById('hours').innerHTML = hoursMilitary;
		document.getElementById('period').style.display = 'none';
		hoursDisplay = hoursMilitary;
		document.getElementById('buttonLabel').innerHTML = '12';
	} else if (displayMilitaryTime === false) {
		document.getElementById('hours').innerHTML = hoursStandard;
		document.getElementById('period').style.display = 'inline';
		hoursDisplay = hoursStandard;
		document.getElementById('buttonLabel').innerHTML = '24';
	}
}

initiateTime(dateData);
initiateDate(dateData);
displayTime(hoursDisplay, minutes, secondsDisplay);
displayDate(dayOfWeek, month, day);

setInterval(function() {
	seconds += 1;
	if (seconds === 60) {
		initiateTime(new Date());
		if (hours === 12 && period === 'AM') {
			initiateDate(dateData);
			displayTime(hoursDisplay, minutes, secondsDisplay);
			displayDate(dayOfWeek, month, day);
		} else {
			displayTime(hoursDisplay, minutes, secondsDisplay);
		}
	} else {
		secondsDisplay = seconds.toString().padStart(2, '0');
		displayTime(hoursDisplay, minutes, secondsDisplay);
	}
}, 1000);
