<?php
  if ($_POST["q1"] && $_POST["q2"] && $_POST["q3"] && $_POST["q4"] && $_POST["q5"]) {
    echo grade();
  }

  function grade() {
    $score = 0;
    $ans1 = "A noble steed";
    $ans2 = "An ogre and his pet";
    $ans3 = "A tic tac";
    $ans4 = "Robin Hood";
    $ans5 = "Fiona";
    if ($_POST["q1"] == $ans1) {
      $score++;
    }
    if ($_POST["q2"] == $ans2) {
      $score++;
    }
    if ($_POST["q3"] == $ans3) {

      $score++;
    }
    if ($_POST["q4"] == $ans4) {
      $score++;
    }
    if ($_POST["q5"] == $ans5) {
      $score++;
    }
    echo "<div align=\"center\">Question 1: What does Fiona call Donkey after rescuing her?<br>You answered: ".$_POST["q1"]."<br>Correct answer: $ans1<br>";
    echo "Question 2: What does Fiona call Shrek and Donkey when she`s mad at them?<br>You answered: ".$_POST["q2"]."<br>Correct answer: $ans2<br>";
    echo "Question 3: What does Donkey suggest Shrek should have?<br>You answered: ".$_POST["q3"]."<br>Correct answer: $ans3<br>";
    echo "Question 4: Who does Shrek, Fiona and Donkey run into in the Forest?<br>You answered: ".$_POST["q4"]."<br>Correct answer: $ans4<br>";
    echo "Question 5: Who yells \"I said GOODNIGHT!\"<br>You answered: ".$_POST["q5"]."<br>Correct answer: $ans5<br>";
    echo "You answered $score out of 5 correctly. ".(20*$score)."%</div>";
  }
?>
