var rand_number = math.random();
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello wide wide wide world';

var myHeading2 = document.querySelector('h2');
myHeading2.textContent = 'Rover Jazz hands!' + rand_number;

function reload() {
    location.reload(true);
}
