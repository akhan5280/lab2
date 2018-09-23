let images = [];
let i = 0;
images.push("images/shrek1.jpg");
images.push("images/shrek2.jpg");
images.push("images/shrek3.jpg");
images.push("images/shrek4.jpg");
images.push("images/shrek5.jpg");
images.push("images/shrek6.jpg");
images.push("images/shrek7.jpg");
images.push("images/shrek8.jpg");
images.push("images/shrek9.jpg");
images.push("images/shrek10.jpg");

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
