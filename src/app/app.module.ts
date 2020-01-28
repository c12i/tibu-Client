import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RequestVerificationComponent } from './request-verification/request-verification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { 
  MatToolbarModule,MatButtonModule,
  MatSidenavModule,MatIconModule,
  MatListModule, MatMenuModule  
} from '@angular/material';
import { TableComponent } from './table/table.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { TestResultComponent } from './test-result/test-result.component';
import { FileUploadService } from './services/file-upload.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    RequestVerificationComponent,
    DashNavigationComponent,
    DashboardComponent,
    TableComponent,
    TestResultComponent
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
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [AuthService, FileUploadService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
