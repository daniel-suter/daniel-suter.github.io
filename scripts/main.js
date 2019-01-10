var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello wide world' + Date();

var myHeading2 = document.querySelector('h2');
myHeading2.textContent = 'Rovers Jazz hands!' + Math.random();

function reload() {
    location.reload(true);
}
