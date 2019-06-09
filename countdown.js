function checkDate()
{
var input = document.getElementById("inputDate").value;
var comingdate = new Date(input);

var w = document.getElementById('w');
var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

var x = setInterval(function(){
  var now = new Date();
  var des = comingdate.getTime() - now.getTime();
  var weeks = Math.floor((des% (1000 * 60 * 60 * 24)) / (1000 * 60 * 7));
  var days = Math.floor(des/(1000 * 60 * 60 * 24));
  var hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 *60));
  var mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
  var secs = Math.floor(des%(1000 * 60) / 1000);

  w.innerHTML = getTrueNumber(weeks);
  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  if(des <= 0) clearInterval(x);

},1000);

function getTrueNumber(x) {
  if (x< input) return '0'+x;
  else return x;
}
}



/*var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var weeks = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 7));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("w").innerHTML = weeks + " Weeks";
document.getElementById("d").innerHTML = days + " Days";
document.getElementById("h").innerHTML = hours + " Hours";
document.getElementById("m").innerHTML = minutes + " Minutes";
document.getElementById("s").innerHTML = seconds + " Seconds";


  document.getElementById("hms").innerHTML = hours + ":"
+ minutes + ":" + seconds + "";


// If the count down is finished, write some text 
if (distance < 0) {
  clearInterval(x);
  document.getElementById("weeks").innerHTML = "Sorry!";
document.getElementById("days").innerHTML = "No";
document.getElementById("hours").innerHTML = "New";
document.getElementById("minutes").innerHTML = "Possible";
document.getElementById("seconds").innerHTML = "Date";
}
}, 1000);*/
