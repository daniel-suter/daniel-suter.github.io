var d = new Date();
var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello wide world' + datestring;

var myHeading2 = document.querySelector('h2');
myHeading2.textContent = 'Rovers Jazz hands!' + Math.random();

function reload() {
    location.reload(true);
}
