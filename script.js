//time/date display

var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = moment().format('[Today is] dddd MMMM DD, YYYY[. It is] hh:mm a [EST]');
  timeDisplayEl.text(rightNow);
};

setInterval(displayTime, 1000);

var buttonEl = $('#search-btn');

