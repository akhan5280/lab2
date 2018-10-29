<?php

$mysqli = new mysqli("mysql.eecs.ku.edu", "a862k275", "cu7Feexo", "a862k275");

if ($result = $mysqli->query("SELECT * FROM Users")) {
    /* fetch associative array */
    echo "<table><tr><th>All Users</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td align=\"left\">".$row["user_id"]."</td></tr>";
    }
    echo "</table>";
    /* free result set */
    $result->free();
    echo "<a href=\"AdminHome.html\">Return</a>";
}

?>
