function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68iHMX2hOFv":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date())-1293900000;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {

  function updateClock() {
    var t = getTimeRemaining(endtime);

    player.SetVar("hours",('0' + t.hours).slice(-2));
    player.SetVar("minutes",('0' + t.minutes).slice(-2));
    player.SetVar("seconds",('0' + t.seconds).slice(-2));

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
}

