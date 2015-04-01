
var smokeBtn = document.getElementById('smoke_toggle');
var timeBtn = document.getElementById('time_toggle');

// var smoke = document.querySelectorAll('li');
var smokeContainer = document.getElementById('smoke');
var timeContainer = document.getElementById('container');
var timeElements = document.querySelectorAll('.time');
var smoke_state = 'on';
var time_state = 'on';




function smokeToggle() {
  if (smoke_state == 'on'){
    smokeContainer.style.opacity='0';
    smoke_state = 'off';
  }
  else {
    smokeContainer.style.opacity='1';
    smoke_state = 'on';
  }
}

function timeToggle() {

    if (time_state == 'on'){
      for (var i=0; i < timeElements.length; i++) {
        timeElements[i].className = 'paused'
      }
      time_state = 'off';
    }
  else {
    for (var i=0; i < timeElements.length; i++) {
      timeElements[i].className = 'anim'
    }
    time_state = 'on';
  }
}



smokeBtn.addEventListener('click', smokeToggle, false);
timeBtn.addEventListener('click', timeToggle, false);
