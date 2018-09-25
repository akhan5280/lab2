function listen() {
  let red = document.getElementById('red');
  let green = document.getElementById('green');
  let blue = document.getElementById('blue');
  let width = document.getElementById('width');
  let bgred = document.getElementById('bgred');
  let bggreen = document.getElementById('bggreen');
  let bgblue = document.getElementById('bgblue');

  red.addEventListener("focus", function(){ focus("red"); });
  green.addEventListener("focus", function(){ focus("green"); });
  blue.addEventListener("focus", function(){ focus("blue"); });
  width.addEventListener("focus", function(){ focus("width"); });
  bgred.addEventListener("focus", function(){ focus("bgred"); });
  bggreen.addEventListener("focus", function(){ focus("bggreen"); });
  bgblue.addEventListener("focus", function(){ focus("bgblue"); });
  red.addEventListener("mouseover", function(){ focus("red"); });
  green.addEventListener("mouseover", function(){ focus("green"); });
  blue.addEventListener("mouseover", function(){ focus("blue"); });
  width.addEventListener("mouseover", function(){ focus("width"); });
  bgred.addEventListener("mouseover", function(){ focus("bgred"); });
  bggreen.addEventListener("mouseover", function(){ focus("bggreen"); });
  bgblue.addEventListener("mouseover", function(){ focus("bgblue"); });
  red.addEventListener("mouseout", function(){ blur("red"); });
  green.addEventListener("mouseout", function(){ blur("green"); });
  blue.addEventListener("mouseout", function(){ blur("blue"); });
  width.addEventListener("mouseout", function(){ blur("width"); });
  bgred.addEventListener("mouseout", function(){ blur("bgred"); });
  bggreen.addEventListener("mouseout", function(){ blur("bggreen"); });
  bgblue.addEventListener("mouseout", function(){ blur("bgblue"); });
  red.addEventListener("blur", function(){ blur("red"); });
  green.addEventListener("blur", function(){ blur("green"); });
  blue.addEventListener("blur", function(){ blur("blue"); });
  width.addEventListener("blur", function(){ blur("width"); });
  bgred.addEventListener("blur", function(){ blur("bgred"); });
  bggreen.addEventListener("blur", function(){ blur("bggreen"); });
  bgblue.addEventListener("blur", function(){ blur("bgblue"); });
}

function change() {
  let red = document.getElementById('red');
  let green = document.getElementById('green');
  let blue = document.getElementById('blue');
  let width = document.getElementById('width');
  let bgred = document.getElementById('bgred');
  let bggreen = document.getElementById('bggreen');
  let bgblue = document.getElementById('bgblue');
  let maintext = document.getElementById('maintext');
  if (parseInt(red.value,16) <= 255 && parseInt(green.value,16) <= 255 && parseInt(blue.value,16) <= 255 && (red.value+green.value+blue.value).length == 6) {
    maintext.style.borderColor = red.value + green.value + blue.value;
    console.log("border changed to", red.value + green.value + blue.value,"\nnow =",maintext.style.borderColor);
  }
  if (!width.value.isNaN && width.value) {
    maintext.style.width = Number(width.value);
    console.log("width changed to",Number(width.value),"\nnow =",maintext.style.width);
  }
  if (parseInt(bgred.value,16) <= 255 && parseInt(bggreen.value,16) <= 255 && parseInt(bgblue.value,16) <= 255) {
    maintext.style.backgroundColor = bgred.value + bggreen.value + bgblue.value;
    console.log("bg changed to", bgred.value + bggreen.value + bgblue.value,"\nnow =", maintext.style.backgroundColor);
  }
  red.value = "";
  green.value = "";
  blue.value = "";
  width.value = "";
  bgred.value = "";
  bggreen.value = "";
  bgblue.value = "";
}

function reset() {
  let maintext = document.getElementById('maintext');
  maintext.style.borderColor = 0;
  maintext.style.backgroundColor = "white";
  maintext.style.width = 500;
}

function focus(pre) {
  let label = document.getElementById(pre+"label");
  label.style.backgroundColor = "#60d7f7";
}

function blur(pre) {
  let label = document.getElementById(pre+"label");
  label.style.backgroundColor = "#0ec0f2";
}
