import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
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

  onSubmit(form:NgForm){
    this.authService.login(this.userModel);
  }

  constructor(private authService:AuthService, private route:Router) { }

}
