export default class formControl {
  constructor(num,email) {
    this.num = num;
    this.email = email;
    // this.CheckName();
  }
 
  checkIsNumber() {
    const input = document.getElementById("num1").value.trim();
    const errorMsg = document.getElementById("notNumber");
    if (input === "" || isNaN(input)) {
      errorMsg.hidden = false; 
      return false;
    } else {
      errorMsg.hidden = true; 
      return true; 
    }
  }

  checkIsEmail() {
    const email = document.getElementById("email").value.trim();
    const errorMsg = document.getElementById("notEmail");
    // Regex for basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      errorMsg.hidden = false; 
      return false;
    } else {
      errorMsg.hidden = true; 
      return true;
    }
  }
  
  submitHandler(event) {
    event.preventDefault();
    const isNumberValid = this.checkIsNumber();
    const isEmailValid = this.checkIsEmail();
    if (isNumberValid && isEmailValid) {
      alert("Success: Form submitted!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  }
  // CheckName() {
  //   localStorage.setItem("lastname", "Mthimban'");
  // }
}


