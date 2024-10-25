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

  let arrSenteces = [who, action, what, when];
  let paragraph = document.querySelector("#excuse");
  paragraph.innerText = sentencesCreator(arrSenteces);
};

function sentencesCreator(arrSenteces) {
  let sentence = "";
  for (let i in arrSenteces) {
    sentence =
      sentence +
      arrSenteces[i][Math.floor(Math.random() * arrSenteces[i].length)] +
      " ";
  }
  return sentence;
}
