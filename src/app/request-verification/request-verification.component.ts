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

  reqId: string;
  invalidReqId: boolean;

  getRequest(){
    this.authService.fetchRequestDetails(this.reqId).subscribe(request=>{
      this.invalidReqId = false;
      this.authService.setDoctor(request)
      this.authService.setRider(request)
      this.authService.setSessionStorage(request)

      this.route.navigate(['dashboard']);
    },
    error=>{
      console.log(error)
      this.invalidReqId = true;
    });
  }

  logout(){
    this.authService.logout();
  }

}
