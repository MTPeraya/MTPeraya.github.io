// This file adds interactivity to index.html

// 1. Find the button and heading elements in the HTML
const myButton = document.getElementById('my-button');
const mainHeading = document.getElementById('main-heading');

// 2. Add an "event listener" that waits for a click on the button
myButton.addEventListener('click', function() {
    // 3. When the button is clicked, change the heading's text
    mainHeading.textContent = 'The files are connected! 🎉';
});