function change() {
  let red = document.getElementById('red');
  let green = document.getElementById('green');
  let blue = document.getElementById('blue');
  let width = document.getElementById('width');
  let bgred = document.getElementById('bgred');
  let bggreen = document.getElementById('bggreen');
  let bgblue = document.getElementById('bgblue');
  let maintext = document.getElementById('maintext');
  if (parseInt(red.value,16) + parseInt(green.value,16) + parseInt(blue.value,16) <= 255 && parseInt(red.value,16) + parseInt(green.value,16) + parseInt(blue.value,16) > 0) {
    maintext.style.borderColor = red.value + green.value + blue.value;
  }
  if (!width.value.isNaN && width.value) {
    maintext.style.width = Number(width.value);
  }
  if (parseInt(bgred.value,16) + parseInt(bggreen.value,16) + parseInt(bgblue.value,16) <= 255 && parseInt(bgred.value,16) + parseInt(bggreen.value,16) + parseInt(bgblue.value,16) > 0) {
    maintext.style.backgroundColor = bgred.value + bggreen.value + bgblue.value;
  }
}
