//time/date display

var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = moment().format('[Today is] dddd MMMM DD, YYYY[. It is] hh:mm a [EST]');
  timeDisplayEl.text(rightNow);
};

setInterval(displayTime, 1000);

var buttonEl = $('#search-btn');

//API Key for Weather API Call
var APIKey = "0dc6bffb22b00026825caac91f732003";

//User input variables
var city = "";
var state ="";


//save user input to local storage
var userInput = document.getElementById(userCityInput);

//store
localStorage.setItem("city", userInput);

//Load item and show in console
console.log(localStorage.getItem('city'))

//save user input into a variable
function cityName() {
  var userInputCity = document.getElementById('userInput-city')
  console.log(userInputCity);
};

cityName();

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//API Call
//fetch (queryURL);