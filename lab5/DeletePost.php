<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

  $i=0;
  $mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");


  if ($result = $mysqli->query("SELECT * FROM Posts")) {
      echo "<table><tr><th>Post</th><th>Author</th><th>Delete?</th></tr>";
      /* fetch associative array */
      while ($row = $result->fetch_assoc()) {
          echo "<tr><td>".$row["content"]."</td><td>".$row["author_id"]."</td><td><input type=\"checkbox\" name=\"post$i\" value=\"".$row["post_id"]."\"></td></tr>";
          $i++;
      }
      echo "</table>";
      /* free result set */
      $result->free();
  }


if (isset($_POST["submit"])) {
  for ($j=0; $j<$i; $j++) {
    if (isset($_POST["post$j"])) {
      $post = $_POST["post$j"];
      if ($result = $mysqli->query("SELECT post_id FROM Posts WHERE post_id='$post'")) {
        echo "Post with ID: ".$result->fetch_assoc()["post_id"]." deleted!<br>";
      }
      $mysqli->query("DELETE FROM Posts WHERE post_id='$post'");
    }
  }
  echo "<button onclick=\"reload()\">Refresh</button>";
  //echo "<meta http-equiv='refresh' content='0'>";
}

?>
