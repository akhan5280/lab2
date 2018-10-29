<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");
if ($mysqli->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}

$name = $_POST["username"];

if (!$name) {
  echo "No username given<br>";
}
else if ($mysqli->query("INSERT INTO Users VALUES ('$name')")) {
  echo "New user successfully created!<br>";
}
else {
  echo "User already exists<br>";
}
echo "<a href=\"CreateUser.html\">Return</a>";


?>
