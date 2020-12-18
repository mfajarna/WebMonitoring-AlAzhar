var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
var date = document.getElementById('date');

function hexClock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  var day = time.getDate().toString();
  var month = time.getMonth().toString();
  var year = time.getFullYear().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }



  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  var hexColorStr = '#' + hours + minutes + seconds;
  var dateStr = day + ' '+ month + ' '+ year;


  clock.textContent = clockStr;
  hexColor.textContent = hexColorStr;
  date.textContent = dateStr;


}

hexClock();
setInterval(hexClock, 1000);