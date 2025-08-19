import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";
let username = "mthembu";
localStorage.setItem("username", username);
if (localStorage.getItem(username)) {
  console.log("last name " + username);
} else {
  console.log("no first name");
}
// windows.setName = () => {
  

// }

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
  document.getElementById("form").style.display = "block"; // show form
  document.getElementById("no").style.display = "none"; // hide goodbye
};

window.showNo = function () {
  document.getElementById("no").style.display = "block"; // show goodbye
  document.getElementById("form").style.display = "none"; // hide form
};

let input = document.getElementById("yourname");
let btn = document.getElementById("save");
btn.addEventListener("click", () => {
  localStorage.setItem("username", input.value);
  alert("Saved: " + input.value);
});
if (localStorage.username) {
  input.value = localStorage.username;
  alert("Username found: " + localStorage.username);
}



