<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");

function show() {
  $author = $_POST["user"];
  $mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");
  if ($result = $mysqli->query("SELECT content FROM Posts WHERE author_id='$author'")) {
      echo "<table><tr><th>$author</th></tr>";
      /* fetch associative array */
      while ($row = $result->fetch_assoc()) {
          echo "<tr><td>".$row["content"]."</td></tr>";
      }
      echo "</table>";
      echo "<button href=\"ViewUserPosts.html\">Select New User</button>";
      /* free result set */
      $result->free();
  }
}

function select() {
  $mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");

  if ($result = $mysqli->query("SELECT * FROM Users")) {
      /* fetch associative array */
      echo "<select name=\"user\">";
      while ($row = $result->fetch_assoc()) {
          echo "<option value=\"".$row["user_id"]."\">".$row["user_id"]."</option>";
      }
      echo "</select>";
      /* free result set */
      $result->free();
  }
}

if (isset($_POST["user"])) {
  show();
}
else {
  select();
}
?>
