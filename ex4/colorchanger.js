function change() {
  let red = document.getElementById('red');
  let green = document.getElementById('green');
  let blue = document.getElementById('blue');
  let width = document.getElementById('width');
  let bgred = document.getElementById('bgred');
  let bggreen = document.getElementById('bggreen');
  let bgblue = document.getElementById('bgblue');
  let maintext = document.getElementById('maintext');
  console.log(red.value);
  if (parseInt(red.value,16) <= 255 && parseInt(green.value,16) <= 255 && parseInt(blue.value,16) <= 255) {
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
