import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './user/login/forgotpassword.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';


const routes: Routes = [
  { path: '', component: UserComponent},
  { path: 'login', component: UserComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
