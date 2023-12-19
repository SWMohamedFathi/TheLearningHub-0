import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //email2= new FormControl('ex@example.com', [Validators.required, Validators.email]); 
registerForm : FormGroup = new FormGroup({
  fullName : new FormControl(' Dana', Validators.required), 
  email : new FormControl('ex@example.com', [Validators.required, Validators.email]), 
  password :new FormControl('********', [Validators.required, Validators.minLength(8)]), //1-8
  confirmPassword:new FormControl('********')//null 
})


register(){
console.log(this.registerForm.value);
}
MatchError(){
  if(this.registerForm.controls['password'].value==
  this.registerForm.controls['confirmPassword'].value)
  this.registerForm.controls['confirmPassword'].setErrors(null)
  else

  this.registerForm.controls['confirmPassword'].setErrors({misMatch:true})


}
}