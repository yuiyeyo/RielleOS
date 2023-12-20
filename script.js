// Show the popup when the page loads
window.onload = function () {
  showLanding();
};

function showLanding() {
  document.getElementById('landing-container').style.display = 'block';

  // Make the popup draggable
  makeDraggable(document.getElementById('landing-container'));
}

function closePopup() {
  document.getElementById('landing-container').style.display = 'none';
}

function makeDraggable(element) {
  let offsetX, offsetY, isDragging = false;

  element.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      element.style.left = e.clientX - offsetX + 'px';
      element.style.top = e.clientY - offsetY + 'px';
    }
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
}

// Function to update the clock time
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  // Add leading zero if single digit
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  var timeString = hours + ':' + minutes ;

  // Update the content of the #clock element
  document.getElementById('clock').innerHTML = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call updateClock() to initialize the clock immediately
updateClock();