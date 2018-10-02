function listen() {
  let in1 = document.getElementsByClassName('input-1');
  let in2 = document.getElementsByClassName('input-2');
  let in3 = document.getElementsByClassName('input-3');
  let in4 = document.getElementsByClassName('input-4');
  let in5 = document.getElementsByClassName('input-5');
  let in6 = document.getElementsByClassName('input-6');
  let in7 = document.getElementsByClassName('input-7');
  let in8 = document.getElementsByClassName('input-8');
  in1[0].addEventListener("mouseover", function(){focus(1,true)});
  in2[0].addEventListener("mouseover", function(){focus(2,true)});
  in3[0].addEventListener("mouseover", function(){focus(3,true)});
  in4[0].addEventListener("mouseover", function(){focus(4,true)});
  in5[0].addEventListener("mouseover", function(){focus(5,true)});
  in6[0].addEventListener("mouseover", function(){focus(6,true)});
  in7[0].addEventListener("mouseover", function(){focus(7,true)});
  in8[0].addEventListener("mouseover", function(){focus(8,true)});
  in1[0].addEventListener("mouseout", function(){focus(1,false)});
  in2[0].addEventListener("mouseout", function(){focus(2,false)});
  in3[0].addEventListener("mouseout", function(){focus(3,false)});
  in4[0].addEventListener("mouseout", function(){focus(4,false)});
  in5[0].addEventListener("mouseout", function(){focus(5,false)});
  in6[0].addEventListener("mouseout", function(){focus(6,false)});
  in7[0].addEventListener("mouseout", function(){focus(7,false)});
  in8[0].addEventListener("mouseout", function(){focus(8,false)});
  in1[0].addEventListener("focus", function(){focus(1,true)});
  in2[0].addEventListener("focus", function(){focus(2,true)});
  in3[0].addEventListener("focus", function(){focus(3,true)});
  in4[0].addEventListener("focus", function(){focus(4,true)});
  in5[0].addEventListener("focus", function(){focus(5,true)});
  in6[0].addEventListener("focus", function(){focus(6,true)});
  in7[0].addEventListener("focus", function(){focus(7,true)});
  in8[0].addEventListener("focus", function(){focus(8,true)});

}

function createError(message, id, row) {
  let error = document.createElement('div');
  error.innerHTML = message;
  error.style.gridArea = row + " / 3 / " +  (row+1) + "/ 4";
  error.style.color = "red";
  error.id = id;
  let parent = document.getElementsByClassName('grid-container')[0];
  parent.insertBefore(error, parent.children[0]);
}

function formChecker() {
  let error1 = document.getElementById('errorUsername');
  let error2 = document.getElementById('errorPassword');
  let error3 = document.getElementById('errorShopping0');
  let error4 = document.getElementById('errorShopping1');
  let error5 = document.getElementById('errorShopping2');
  let error6 = document.getElementById('errorShopping3');
  let error7 = document.getElementById('errorShipping');
  if (error1) {
    error1.parentNode.removeChild(error1);
  }
  if (error2) {
    error2.parentNode.removeChild(error2);
  }
  if (error3) {
    error3.parentNode.removeChild(error3);
  }
  if (error4) {
    error4.parentNode.removeChild(error4);
  }
  if (error5) {
    error5.parentNode.removeChild(error5);
  }
  if (error6) {
    error6.parentNode.removeChild(error6);
  }
  if (error7) {
    error7.parentNode.removeChild(error7);
  }

  let in1 = document.getElementsByClassName('input-1')[0].value;
  let in2 = document.getElementsByClassName('input-2')[0].value;
  let in3 = document.getElementsByClassName('input-3')[0].value;
  let in4 = document.getElementsByClassName('input-4')[0].value;
  let in5 = document.getElementsByClassName('input-5')[0].value;
  let in6 = document.getElementsByClassName('input-6')[0].children[0].children[0].checked;
  let in7 = document.getElementsByClassName('input-7')[0].children[0].children[0].checked;
  let in8 = document.getElementsByClassName('input-8')[0].children[0].children[0].checked;
  if (!in1) {
    createError("Must provide username", "errorUsername", 2);

  }
  if (!in2) {
    createError("Must provide password", "errorPassword", 3);

  }
  console.log(in3);
  if (in3<0 || !in3) {
    createError("Must provide quantity", "errorShopping1", 4);

  }
  if (in4<0 || !in4) {
    createError("Must provide quantity", "errorShopping2", 5);

  }
  if (in5<0 || !in5) {
    createError("Must provide quantity", "errorShopping3", 6);

  }
  if (in3 == 0 && in4 == 0 && in5 == 0) {
    createError("Gotta buy something", "errorShopping0", 8);

  }
  if (!(in6 || in7 || in8)) {
    createError("Must pick shipping option", "errorShipping", 7);

  }

  if (in1 && in2 && in3>=0 && in4>=0 && in5>=0 && !(in3 == 0 && in4 == 0 && in5 == 0) && (in6 || in7 || in8)) {
    return true;
  }
  return false;
}

function focus(n,on) {
  if (n == 7 || n == 8) {
    n = 6;
  }
  let label = document.getElementsByClassName("label-"+n);
  if (on) {
    label[0].style.backgroundColor = "white";
  }
  else {
    label[0].style.backgroundColor = "#aaaaaa";
  }
}
