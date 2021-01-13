import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { RegisterPageComponent } from './registerpage/registerpage.component'

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'register', component: RegisterPageComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
      // <-- debugging purposes only
 ],
   exports: [RouterModule],
})
export class AppRoutingModule { }
