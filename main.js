function listen() {
  link1.addEventListener("mouseover", function() {fade('validator.PNG')});
  link2.addEventListener("mouseover", function() {fade('slideshow.PNG')});
  link3.addEventListener("mouseover", function() {fade('profile.PNG')});
  link4.addEventListener("mouseover", function() {fade('colorchanger.PNG')});
  link1.addEventListener("mouseout", back);
  link2.addEventListener("mouseout", back);
  link3.addEventListener("mouseout", back);
  link4.addEventListener("mouseout", back);
}
function fade(pic) {
  document.body.style.backgroundImage = "url(\""+pic+"\")";
  document.body.style.opacity = 0.3;
}
function back() {
  document.body.style.backgroundImage = "url(\"wallpaper2you_347831.jpg\")";
  document.body.style.opacity = 1.0;
}
