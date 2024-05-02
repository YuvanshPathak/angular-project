import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetComponent } from './pages/forget/forget.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch: 'full'
    },
    {
        path: 'login', component:LoginComponent
    },
    {
        path: 'signup', component:SignupComponent
    },
    {
        path: 'forget', component:ForgetComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }