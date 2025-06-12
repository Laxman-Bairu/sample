import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'home',component:HomeComponent, canActivate: [authGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent,canActivate: [authGuard]},
    {path:'',redirectTo:'login',pathMatch:'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
