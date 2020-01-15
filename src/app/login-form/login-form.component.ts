import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userModel = new User("","");
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    
  }

  get currentUser(){
    return JSON.stringify(this.userModel);
  }

}
