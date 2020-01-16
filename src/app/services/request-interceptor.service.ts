import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor  {

  constructor(private authService: AuthService) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(this.authService.isLoggedIn()){
        let modifiedRequest = req.clone({
        setHeaders: { Authorization: `token ${this.authService.getToken()}`}
      });
      return next.handle(modifiedRequest);
      }
      else{
        let modifiedRequest = req.clone({
          setHeaders: { Authorization: `Bearer ${this.authService.getToken()}`}
        });
        return next.handle(modifiedRequest);
      }
      
    }
  
}
