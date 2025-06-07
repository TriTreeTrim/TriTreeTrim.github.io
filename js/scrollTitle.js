const canvas = document.getElementById('scrollTitle');
const ctx = canvas.getContext('2d');
const text = "TriTreeTrim's Warehouse";
let x = canvas.width;

function draw() {
 ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
 ctx.font = '66px Arial';
 ctx.fillStyle = 'Blue';
 ctx.fillText(text, x, 100);
 x -= 2; // Adjust speed of scrolling here
 if (x < -ctx.measureText(text).width) {
  x = canvas.width; // Reset position when text is out of view
 }
 requestAnimationFrame(draw);
}

draw();
