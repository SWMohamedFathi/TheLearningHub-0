import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message :string = 'This message from Home Service !!'; 
  numberOfActiveCourse = new BehaviorSubject(0); //
  courses:any=[{}];
  constructor(private http :HttpClient) { }
  user:string ='dana@gmail.com'; 
  GetAllCourses(){
    this.http.get('https://localhost:5000/api/Course').subscribe((resp)=>{
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
    this.http.delete('https://localhost:5000/api/Course/delete/'+id).subscribe((resp)=>{
      alert('Deleted')
    },err=>{
      alert('something want wrong !!');
    })
  }
}
