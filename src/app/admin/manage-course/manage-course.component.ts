import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import form-related modules

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  @ViewChild('callDeleteDailog') callDelete!: TemplateRef<any>;
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>;
  updateForm:FormGroup = new FormGroup({
    courseid :new FormControl(),
     coursename:new FormControl('',Validators.required),
     price:new FormControl('',Validators.required),
     startDate:new FormControl('',Validators.required),
     endDate:new FormControl('',Validators.required),
  });

  constructor(public home: HomeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.home.GetAllCourses();
  }

  DeleteCourse(id: number) {
    const dialogRef = this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === '1') {
        this.home.DeleteCourse(id);
      } else {
        console.log('Thank you');
      }
    });
  }

  OpenCreateDialog() {
    this.dialog.open(CreateCourseComponent);
  }

  pData:any ;
  openUpdateDailog(obj:any){
    this.pData = obj;
    console.log(this.pData);
    this.updateForm.controls['courseid'].setValue(this.pData.courseid);
    this.dialog.open(this.callUpdateDialog);
  }
  UpdateCourse(){
    debugger;
    this.home.UpdateCourse(this.updateForm.value);
  }
}
