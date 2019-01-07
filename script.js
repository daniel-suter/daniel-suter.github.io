<script>
// just a test for now   

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
  
function ReturnTime(event) {
  var n = event.timeStamp;
  document.getElementById("demo").innerHTML = n;
}
  
</script>
