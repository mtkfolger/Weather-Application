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



var form = document.getElementById('form');

form.addEventListener('submit', function(event){
  event.preventDefault() // Do this to prevent the form from autosubmitting

  var cityName = document.getElementById('userInput-city').value;
  
  localStorage.setItem("City", cityName); 

  console.log(cityName);
})

// Fetch API Call using information from local storage

fetch("https://api.openweathermap.org/data/2.5/forecast?q=cityName&appid=0dc6bffb22b00026825caac91f732003")
  .then(response =>{
    return response.json();
  })
.then(json=>{
  console.log(json);
})
