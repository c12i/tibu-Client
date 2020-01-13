import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestVerificationComponent } from './request-verification/request-verification.component';


const routes: Routes = [
  {path: 'verify', component: RequestVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
