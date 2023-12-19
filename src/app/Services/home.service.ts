import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message :string = 'This message from Home Service !!'; 
  numberOfActiveCourse = new BehaviorSubject(0); //
  courses:any=[{}];
  constructor(private http :HttpClient,private toastr:ToastrService, private spinner:NgxSpinnerService) { }
  user:string ='dana@gmail.com'; 
  GetAllCourses(){
    this.http.get('https://localhost:7234/api/Course/GetAllCourse').subscribe((resp)=>{
      this.courses = resp;
      localStorage.setItem('username', this.user);
      localStorage.getItem('username');
    },err=>{ 
      console.log(err.message);
      console.log(err.status);
      
     
    })
  }

  DeleteCourse(id:number){
      debugger;
      this.spinner.show;
    this.http.delete('https://localhost:7234/api/Course/DeleteCourse/'+id).subscribe((resp)=>{
      this.toastr.success('Deleted')
    },err=>{
    this.toastr.error
    this.spinner.hide;

    })
  }

  CreateCourse(body:any){
    debugger
    this.http.post('https://localhost:7234/api/Course/CreateCourse',body).subscribe((resp) =>{
      alert('Created')

    },
    err=>
    alert('something want wrong'))
  window.location.reload();

  }
}
