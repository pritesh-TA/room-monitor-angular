import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ForgotpasswordComponent} from './login/forgotpassword.component'
import { UserComponent } from './user.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [LoginComponent,
    RegisterComponent,
    UserComponent,
    ForgotpasswordComponent],
  exports: [UserComponent]
})
export class UserModule { }
