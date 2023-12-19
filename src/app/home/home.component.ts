import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public home:HomeService){}
  ngOnInit(): void {
   console.log('Home Component');
  //  setInterval(()=>{
  //   this.home.numberOfActiveCourse.next(this.home.numberOfActiveCourse.value+1);
  //  },5000)
  //  this.AlertFunction();
  }
  AlertFunction(){
    this.home.numberOfActiveCourse.subscribe((value)=>{
      //alert(`the new value is ${value}`)
    })
  }

}
