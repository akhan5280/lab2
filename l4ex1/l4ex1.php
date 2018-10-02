<?php

function createTable($rows, $cols) {
  echo "<table>";
  echo "<tr><td>"." "."</td>";
  for ($k=1;$k<=$rows;$k++) {
    echo "<td>$k</td>";
  }
  for ($i=1; $i<=$rows; $i++) {
    for ($j=0; $j<=$cols; $j++) {
      if ($j==0) {
        echo "<tr><td>".$i."</td>";
        continue;
      }
      echo "<td>".$i*$j."</td>";
      if ($j==$cols) {
        echo "</tr>";
      }
    }
  }
  echo "</table>";
}

echo createTable(100,100);

?>
