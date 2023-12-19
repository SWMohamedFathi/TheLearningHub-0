import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  @ViewChild  ('callDeleteDailog')callDelete!:TemplateRef<any>
  constructor(public home:HomeService,public dialog: MatDialog){}
  ngOnInit(): void {
   this.home.GetAllCourses();
  }

  DeleteCourse(id:number){
    const dialogRef= this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result=='1'){
        debugger;
        this.home.DeleteCourse(id);
      }
  
    else {
      console.log('Thank you ');
    }
    })

    
  }
  OpenCreateDialog(){
      this.dialog.open()
  }
 
}
