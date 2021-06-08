const song = document.getElementById("song");
const numbre = document.getElementById("numbre");
song.play()
var counter = 0;
var doTheSin = 0;
function doTheBruh() {
  counter += 1;
  doTheSin = (counter/10)+Math.sin(counter/10)*(counter/100);
  numbre.innerHTML = counter;
  numbre.style.fontSize = doTheSin+"%";
}
setInterval(doTheBruh)


