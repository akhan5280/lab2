function validate() {
  if (document.getElementById('text-3') != null) {
    let element = document.getElementById('text-3');
    element.parentNode.removeChild(element);
  }
  let firstPassword = document.getElementById('first');
  let secondPassword = document.getElementById('second');
  if (firstPassword.value != secondPassword.value) {
    alert("The passwords entered don't match");
  }
  else if (firstPassword.value.length < 8) {
    alert("The passwords are not at least 8 characters long");
  }
  else {
    firstPassword.value = "";
    secondPassword.value = "";
    document.getElementById('button').innerHTML = "Validated";
    var newDiv = document.createElement("div");
    newDiv.align = "center";
    newDiv.id = "text-3";
    newDiv.innerHTML = "Password has been validated";
    var currentDiv = document.getElementById("grid-container");
    document.body.insertBefore(newDiv, currentDiv);
  }
}
