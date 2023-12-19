import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
//http://localhost:4200/
  {
    path: 'about',
    component: AboutUsComponent
  }, {
    path: 'contact',
    component: ContactUsComponent
  },
  //http://localhost:4200/
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'security',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  }, {
    path:'admin', 
    loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
