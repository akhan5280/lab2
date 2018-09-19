function validate() {
  let firstPassword = document.getElementById('first');
  let secondPassword = document.getElementById('second');
  if (firstPassword.value != secondPassword.value) {
    alert("The passwords entered don't match");
  }
  else if (firstPassword.value.length < 8) {
    alert("The passwords are not at least 8 characters long");
  }
  else {
    firstPassword.disabled = true;
    secondPassword.disabled = true;
    document.getElementById('button').disabled = true;
    document.getElementById('button').innerHTML = "Validated";
  }
}
