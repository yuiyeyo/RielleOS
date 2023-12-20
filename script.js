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
