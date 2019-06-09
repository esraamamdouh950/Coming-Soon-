alert ("Select Date in the future")
function Check() {
    var x = document.getElementById("Date").value;
    var countDownDate = new Date(x).getTime();
    countdownfunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s";
        distance.value = "";
        document.getElementById("demo").style.backgroundColor = "cadetblue";
    }, 1000);
    document.getElementById("end").innerHTML = x;
    document.getElementById("end").style.backgroundColor = "cadetblue"; 
    document.getElementById("Date").style.display = "none";
    document.getElementById("btn").style.display = "none";
    const dateElement = document.getElementById('clock');

    const digitalTimeElement = document.getElementById('digital-clock');

    const analogTimeElement = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    }

    const getCurrentDate = () => moment().format('MMMM Do, YYYY');

    const getCurrentTime = (type) => {
        if (type == 'sec') return moment().format('s');
        if (type == 'min') return moment().format('mm');
        if (type == 'hrs') return moment().format('h');
        return moment().format('h:mm:ss a');
    }

    const displayDate = date => {
        dateElement.innerHTML = date;
    }

    const displayDigitalTime = time => {
        digitalTimeElement.innerHTML = time;
    };

    const displayAnalogTime = _time => {
        let secondsDeg = getCurrentTime('sec') * 6;
        let minutesDeg = getCurrentTime('min') * 6;
        let hoursDeg = getCurrentTime('hrs') * 30;

        analogTimeElement.seconds.style.transform = "rotate(" + secondsDeg + `deg)`;
        analogTimeElement.minutes.style.transform = "rotate(" + minutesDeg + `deg)`;
        analogTimeElement.hours.style.transform = "rotate(" + hoursDeg + `deg)`;
    };

    const alarm = times => {
        times.filter(time => {
            if (time.alarmStart <= getCurrentTime() && time.alarmEnd >= getCurrentTime()) console.log('alarm');
        });
    };

    const clock = () => {
        displayDate(getCurrentDate());
        displayDigitalTime(getCurrentTime());
        displayAnalogTime(getCurrentTime());
        alarm(alarmTimes);
    }

    let alarmTimes = [{
        alarmStart: '5:06 pm',
        alarmEnd: '5:08 pm'
    }];

    setInterval(clock, 1000);
}