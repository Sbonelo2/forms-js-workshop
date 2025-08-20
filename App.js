import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";

if (localStorage.getItem("username")) {
  alert("username found ");
} else {
  alert("There is no username");
};


window.start = () => {
  let x = 5;
  let y = 7;
  const num1 = new NumberWork(5);
  num1.displayNumber();
  num1.pozOrNeg();
  const newForm = new FormControl(7);
  window.newForm = newForm;
};
window.start();
window.showForm = function () {
  document.getElementById("FormSection").style.display = "block"; // show form
  document.getElementById("noBtn").style.display = "none"; // hide goodbye
  document.getElementById("HelloSection").style.display = "none"; // hide goodbye
};
window.showNo = function () {
  document.getElementById("noBtn").style.display = "block"; // show goodbye
  document.getElementById("FormSection").style.display = "none"; // hide form
  document.getElementById("HelloSection").style.display = "none"; // hide goodbye
};

let input = document.getElementById("name");
let btn = document.getElementById("nameBtn");
btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    localStorage.setItem("username", input.value);
    alert("username is " + input.value);
  }
});
if (localStorage.username) {
  let name = localStorage.username;
  alert("Usernames found: " + name);
} else {
  alert("There is no username");
}
