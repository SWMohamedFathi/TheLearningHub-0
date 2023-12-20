import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message: string = 'This message from Home Service !!'; 
  numberOfActiveCourse = new BehaviorSubject<number>(0); // Specify the type for BehaviorSubject
  courses: any = [{}];
  user: string = 'dana@gmail.com'; 
  
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  GetAllCourses() {
    this.http.get('https://localhost:7234/api/Course/GetAllCourse').subscribe(
      (resp) => {
        this.courses = resp;
        localStorage.setItem('username', this.user);
        localStorage.getItem('username');
      },
      (err) => { 
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

  DeleteCourse(id: number) {
    this.spinner.show();
    this.http.delete(`https://localhost:7234/api/Course/DeleteCourse/${id}`).subscribe(
      (resp) => {
        this.toastr.success('Deleted');
      },
      (err) => {
        this.toastr.error('Error occurred');
      }
    );
    this.spinner.hide();
  }

  CreateCourse(body: any) {
    body.imagename = this.display_image;
    this.http.post('https://localhost:7234/api/Course/CreateCourse', body).subscribe(
      (resp) => {
        this.toastr.success('Created');
        // Avoid window reload here if it disrupts user experience
      },
      (err) => {
        this.toastr.error('Something went wrong');
      }
    );
  }

  UpdateCourse(body: any) {
    this.spinner.show();
    this.http.put('https://localhost:7234/api/Course/', body).subscribe(
      (resp) => {
        this.courses = resp;
        this.toastr.success('Updated');
        this.spinner.hide();
      },
      (err) => {
        this.toastr.error('Error occurred');
        this.spinner.hide();
      }
    );
  }
  display_image:any;
  uploadAttachment(file: FormData)
{
this.http.post('https://localhost:7234/api/uploadImage/',file).subscribe((resp:any)=>{
  this.display_image = resp.imagename;
},
(err) => {
  this.toastr.error('Error occurred');
})
}

cat_Courses :any = [];
GetAllCategories() {
  this.http.get('https://localhost:7234/api/Course/GetAllCategories').subscribe(
    (resp) => {
      this.cat_Courses = resp;
    },
    (err) => { 
      this.toastr.error('Error occurred');

    }
  );
}
}
