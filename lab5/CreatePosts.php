<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");
if ($mysqli->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}

$message = $_POST["content"];
$author = $_POST["author"];

if (!$message) {
  echo "No message provided";
}

else if ($result = $mysqli->query("SELECT user_id FROM Users WHERE user_id = '$author'")) {
  if ($result->num_rows > 0) {
    $mysqli->query("INSERT INTO Posts (content, author_id) VALUES ('$message', '$author')");
    echo "Message Posted!";
  }
  else {
    echo "Author not in database";
  }
}

echo "<br><a href=\"CreatePosts.html\">Return</a>";

?>
