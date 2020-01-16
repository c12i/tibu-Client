import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  ngOnInit() {
  }

  userModel = new User("","");
  wrongCredentials: boolean;

  onSubmit(form:NgForm){
    this.authService.login(this.userModel).subscribe(response=>{
      this.wrongCredentials = false;
      localStorage.setItem("mmd_token", response.token);
      this.authService.setCurrentUser(response.user);
      this.route.navigate(['verify']);
    },
    err=>{
      this.wrongCredentials = true;
    });
  }

  constructor(private authService:AuthService, private route:Router) { }

}
