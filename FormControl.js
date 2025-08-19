export default class FormControl{
constructor(num1){
    this.num1 = num1
    }
    submitHandler(){
       const success = Number(this.num1);
       alert('success', success);
    }
}