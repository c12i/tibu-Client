import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pipe, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route: Router) { 
  }

  private reqHeader = {headers: new HttpHeaders()
    .set('Content-Type', 'application/json')}

  private currentUser: any;

  public login(user: any) {
    return this.http.post<any>(`${environment.apiUrl+'api/auth/'}`,user, this.reqHeader);
  }

  public logout(){
    //Get logout endpoint
    this.currentUser = null;
    localStorage.removeItem("mmd_token");
    this.route.navigate(['login']);
  }

  public isLoggedIn(){
    return !!localStorage.getItem("mmd_token");
  }

  public getCurrentUser(){
    return this.currentUser;
  }

  public setCurrentUser(user:any){
    this.currentUser = user;
  }

  public getToken(){
    return localStorage.getItem("mmd_token");
  }

  

}
