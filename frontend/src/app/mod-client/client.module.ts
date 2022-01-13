import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { GardtestGuard } from './gardtest.guard';

const routes : Routes = [
  {path: 'signin', component: SigninComponent, canActivate: [GardtestGuard]},
  {path: 'signup', component: SignupComponent}
]

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
