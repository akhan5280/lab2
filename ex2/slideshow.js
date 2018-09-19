let images = [];
let i = 0;
images.push("https://www.dreamworksanimation.com/wp-content/uploads/2014/10/shrek-watch-shrek4-on.jpg");
images.push("https://i.ytimg.com/vi/lhtH6Zu9VY8/maxresdefault.jpg");
images.push("https://amp.thisisinsider.com/images/5adf9aefbd967144788b4605-750-563.jpg");
images.push("https://www.geek.com/wp-content/uploads/2017/01/shrek-fan-art-625x350.jpg");
images.push("https://www.slashfilm.com/wp/wp-content/images/shrek-swamp-perplexed.jpg");

function next() {
  let currentSlide = document.getElementById('shrek');
  i++;
  if (i >= images.length) {
    i = 0;
  }
  currentSlide.src = images[i];
}

function previous() {
  let currentSlide = document.getElementById('shrek');
  i--;
  if (i < 0) {
    i = images.length-1;
  }
  currentSlide.src = images[i];
}
