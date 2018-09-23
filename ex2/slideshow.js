let images = [];
let i = 0;
images.push("shrek1.jpg");
images.push("shrek2.jpg");
images.push("shrek3.jpg");
images.push("shrek4.jpg");
images.push("shrek5.jpg");
images.push("shrek6.jpg");
images.push("shrek7.jpg");
images.push("shrek8.jpg");
images.push("shrek9.jpg");
images.push("shrek10.jpg");

function next() {
  let currentSlide = document.getElementById('shrek');
  i++;
  if (i >= images.length) {
    i = 0;
  }
  currentSlide.src = images[i];
  document.getElementById('imagenumber').innerHTML = i+1;
}

function previous() {
  let currentSlide = document.getElementById('shrek');
  i--;
  if (i < 0) {
    i = images.length-1;
  }
  currentSlide.src = images[i];
  document.getElementById('imagenumber').innerHTML = i+1;
}
