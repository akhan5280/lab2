let images = [];
let i = 0;
images.push("https://www.dreamworksanimation.com/wp-content/uploads/2014/10/shrek-watch-shrek4-on.jpg");
images.push("https://i.ytimg.com/vi/lhtH6Zu9VY8/maxresdefault.jpg");
images.push("https://amp.thisisinsider.com/images/5adf9aefbd967144788b4605-750-563.jpg");
images.push("https://www.geek.com/wp-content/uploads/2017/01/shrek-fan-art-625x350.jpg");
images.push("https://www.slashfilm.com/wp/wp-content/images/shrek-swamp-perplexed.jpg");
images.push("https://www.dreamworksanimation.com/wp-content/uploads/2014/10/shrek-watch-xmas-on.jpg");
images.push("https://files.kstatecollegian.com/2018/06/Mouth-Alien-Monster-Green-Troll-Martian-Shrek-722415-1.jpg");
images.push("http://images6.fanpop.com/image/photos/41400000/Five-nights-at-Shrek-s-shrek-41412516-1280-720.jpg");
images.push("http://vh1.mtvnimages.com/uri/mgid:ao:image:mtv:509317?quality=0.8&format=jpg&width=980&height=551");
images.push("https://vignette.wikia.nocookie.net/youtubepoop/images/3/32/Shrek_SFM_Compilation/revision/latest?cb=20150205025842");

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
