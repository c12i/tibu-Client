import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestVerificationComponent } from './request-verification/request-verification.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'verify', component: RequestVerificationComponent},
  {
    path: 'dashboard', 
    component: DashNavigationComponent, 
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
