/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let paragraph = document.getElementById("excuse");
  paragraph.innerText = sentencesCreator(who, action, what, when);
};

function sentencesCreator(arr1, arr2, arr3, arr4) {
  let arr = [arr1, arr2, arr3, arr4];
  let sentence = "";
  for (let i in arr) {
    sentence =
      sentence + arr[i][Math.floor(Math.random() * arr[i].length)] + " ";
  }
  return sentence;
}
