<?php
  error_reporting(E_ALL);
  ini_set("display_errors", 1);

  function welcome() {
    echo "<div align=\"center\" class=\"welcome\">Welcome ".$_POST['username']." with password: ".$_POST['password']."</div>";
  }

  function printReceipt() {
    $shippingCost = 0;
    if ($_POST['shipping'] == 0) {
      $shipping = "Free 7 Day";
    }
    else if ($_POST['shipping'] == 5) {
      $shipping = "Three Day";
    }
    else if ($_POST['shipping'] == 50) {
      $shipping = "Overnight";
    }
    echo "<div align=\"center\"><div class=\"receipt-container\"><div class=\"label\"></div><div class=\"label\">Quantity</div><div class=\"label\">Cost Per Item</div><div class=\"label\">Sub Total</div>";
    echo "<div class=\"label\">Hats</div><div class=\"receipt-item\">".$_POST['hats']."</div><div class=\"receipt-item\">$10.00</div><div class=\"receipt-item\">$".(10.00*$_POST['hats']).".00</div>";
    echo "<div class=\"label\">Shirts</div><div class=\"receipt-item\">".$_POST['shirts']."</div><div class=\"receipt-item\">$20.00</div><div class=\"receipt-item\">$".(20.00*$_POST['shirts']).".00</div>";
    echo "<div class=\"label\">Mugs</div><div class=\"receipt-item\">".$_POST['mugs']."</div><div class=\"receipt-item\">$15.00</div><div class=\"receipt-item\">$".(15.00*$_POST['mugs']).".00</div>";
    echo "<div class=\"label\">Shipping</div><div class=\"receipt-item\" id=\"shipping\">$shipping</div><div class=\"receipt-item\">$".($_POST['shipping']).".00</div>";
    echo "<div class=\"label\" id=\"labelCost\">Total Cost</div><div class=\"label\" id=\"total\">$".(10.00*$_POST['hats']+20.00*$_POST['shirts']+15.00*$_POST['mugs']+$_POST['shipping']).".00</div></div></div>";
  }
  echo "<title>Shrek Receipt</title>";
  echo "<style type=\"text/css\">";
  include 'styles.css';
  echo "</style>";

  echo welcome();
  echo "<br><br><br>";
  echo printReceipt();
  echo "<br><br><br>";
  echo "<a href=\"customerFrontend.html\">Back to Store Page</a><br><a href=\"../index.html\">Back to Home Page</a>";

?>
