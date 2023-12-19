import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  constructor(public home:HomeService){}
  createCourse:FormGroup = new FormGroup({
    coursename:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    startDate:new FormControl('',Validators.required),
    endDate:new FormControl('',Validators.required),

  })


  Save(){
    debugger
    this.home.CreateCourse(this.createCourse.value)
  }
}
