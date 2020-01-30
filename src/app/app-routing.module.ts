import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestVerificationComponent } from './request-verification/request-verification.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { AuthGuard } from './guard/auth.guard';
import { TestResultComponent } from './test-result/test-result.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'verify', component: RequestVerificationComponent, canActivate:[AuthGuard]},
  {path:'table', component:TableComponent, canActivate:[AuthGuard]},
  {
    path: 'dashboard', 
    canActivate:[AuthGuard],
    component: DashNavigationComponent, 
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: DashboardComponent},
      {path: 'results/submit', component: TestResultComponent},
    ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
