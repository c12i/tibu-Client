import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RequestVerificationComponent } from './request-verification/request-verification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';

import { 
  MatToolbarModule,MatButtonModule,
  MatSidenavModule,MatIconModule,
  MatListModule, MatMenuModule  
} from '@angular/material';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    RequestVerificationComponent,
    DashNavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
