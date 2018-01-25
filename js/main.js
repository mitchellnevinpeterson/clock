// ---------------------------------------------------------------------------
// ==================creating the time========================================
// ---------------------------------------------------------------------------
// a function the add a zero in front of numbers less than 10
function addZero(i) {
	// check if the number is less than 10
	if(i < 10) {
		// add a zero in front if less than 10
		i = "0" + i
	}
	// send back the new value of i
	return i
}
// creating the funtion for the full time
function time() {
	// storing the variable of the Date() function to call on to get hours, minutes, seconds
	var current = new Date()
	// Storing the variables of hours, minutes, seconds
	var currentHour = current.getHours()
	var currentMinutes = current.getMinutes()
	var currentSeconds = current.getSeconds()
	// changing the hours to to standard time instead of military time
	if(currentHour > 12) {
		// removing 12 hours from clock to make standard time
		currentHour = currentHour - 12
	}
	// at hour 00 in military aka midnight
	if(currentHour == 0) {
		// adding 12 hours so the clock reads 12 instead of 00
		currentHour = currentHour + 12
	}
	minutes = addZero(currentMinutes)
	seconds = addZero(currentSeconds)
	// adding the information to the div in my html
	document.getElementById("time").textContent ="Time: " + currentHour + ":" + minutes + ":" + seconds
	// making the fuction time run every second
	setTimeout(function() {
		time()
		// 1000 milliseconds = 1 second
	}, 1000)
}
// adding the event listener so that the function runs when the page loads
document.getElementById("time").addEventListener("onload", time())

// ---------------------------------------------------------------------------
// ==================creating the date========================================
// ---------------------------------------------------------------------------
function addZero(i) {
	// check if the number is less than 10
	if(i < 10) {
		// add a zero in front if less than 10
		i = "0" + i
	}
	// send back the new value of i
	return i
}
// a function to create the date updating every hour
function date() {
	// storing the variable for the current Date() function
	var current = new Date()
	// storing the variables for the month, day, and year
	var currentMonth = current.getMonth() + 1
	var currentDay = current.getDate()
	var currentYear = current.getYear() - 100
	// addig a zero to keep the dates in two digit format
	month = addZero(currentMonth)
	day = addZero(currentDay)
	year = addZero(currentYear)
	document.getElementById("date").textContent ="Date: " + month + "/" + day  + "/" + year
	// setting a a timout fuction so the date is refreshed every hour
	setTimeout(function(){
		date()
		// 3600000 milliseconds = 1 hour
	}, 3600000)
}
// setting an event listener to start the function when the page is loaded
document.getElementById("date").addEventListener("onload", date())