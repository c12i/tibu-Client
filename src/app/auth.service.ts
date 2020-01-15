import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pipe, BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private options = {headers: new HttpHeaders()
    .set('Content-Type', 'application/json')}

  currentUser: any;

  public login(user: any) {
    return this.http.post<any>(`${environment.apiUrl+'api/auth/'}`,user, this.options).subscribe(response=>{
      console.log(response);
      localStorage.setItem("mmd_token", response.token);
      this.route.navigate(['/verify']);

    });
  }

  public logout(){

  }

  constructor(private http:HttpClient, private route: Router) { 
  }

}
