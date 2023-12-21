// Show the popup when the page loads
window.onload = function () {
  showLanding();
};

function showLanding() {
  document.getElementById('landing-container').style.display = 'block';

  // Make the popup draggable
  makeDraggable(document.getElementById('landing-container'));
  makeResizable(document.getElementById('landing-container'));
}

function closeLanding() {
  document.getElementById('landing-container').style.display = 'none';
}

function showWindow() {
  document.getElementById('window-container').style.display = 'block';

  // Make the popup draggable
  makeDraggable(document.getElementById('window-container'));
}

function closeWindow() {
  document.getElementById('window-container').style.display = 'none';
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

function makeResizable(element) {
  let isResizing = false;
  let startX, startY, startWidth, startHeight;

  const handle = document.createElement('div');
  handle.style.width = '10px';
  handle.style.height = '10px';
  handle.style.background = '#000';
  handle.style.position = 'absolute';
  handle.style.bottom = '0';
  handle.style.right = '0';
  handle.style.cursor = 'se-resize';

  element.appendChild(handle);

  handle.addEventListener('mousedown', function (e) {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(element).height, 10);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
      isResizing = false;
      document.removeEventListener('mousemove', handleMouseMove);
    });
  });

  function handleMouseMove(e) {
    if (isResizing) {
      const width = startWidth + e.clientX - startX;
      const height = startHeight + e.clientY - startY;

      element.style.width = width + 'px';
      element.style.height = height + 'px';
    }
  }
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