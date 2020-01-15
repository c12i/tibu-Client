import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-request-verification',
  templateUrl: './request-verification.component.html',
  styleUrls: ['./request-verification.component.css']
})
export class RequestVerificationComponent implements OnInit {

  constructor(private route:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
