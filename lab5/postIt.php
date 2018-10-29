<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

  $author = $_POST["user"];

  $mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");
  if ($result = $mysqli->query("SELECT content FROM Posts WHERE author_id='$author'")) {
      /* fetch associative array */
      while ($row = $result->fetch_assoc()) {
          echo $row["content"]."<br>";
      }
      /* free result set */
      $result->free();
  }

?>
