import { Component } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  activeCourse:number=0;
  constructor(public home:HomeService){

    this.home.message='You are logged in ';
    this.home.numberOfActiveCourse.subscribe((value)=>{
      this.activeCourse = value;
    })
  }

}
