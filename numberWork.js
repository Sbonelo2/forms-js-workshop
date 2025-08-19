export default class numberWork {
  constructor(x) {
    this.num1 = x;
  }
  displayNumber() {
    console.log(`This is num1  ${this.num1}`);
  }
  pozOrNeg() {
    if (this.num1 < 0) {
      console.log("Negative");
    } else {
      console.log("Positive");
    }
  }
}



