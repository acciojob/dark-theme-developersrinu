//your code here
// script.js
function swapTheme() {
    const appDiv = document.getElementById('app');
    const swapButton = document.getElementById('swap');

    // Toggle between day and night classes
    appDiv.classList.toggle('day');
    appDiv.classList.toggle('night');

    // Toggle between button_day and button_night classes
    swapButton.classList.toggle('button_day');
    swapButton.classList.toggle('button_night');
}


