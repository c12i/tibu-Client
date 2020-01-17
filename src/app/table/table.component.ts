import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private route:Router, private authService:AuthService) { }

  rejectInput: string;
  dateToday = new Date();

  request = {
    from: sessionStorage.getItem("pat_name"),
    specimen: this.authService.reqObject.specimen,
    collected_at: sessionStorage.getItem("picked_at")
  }

  acceptRequest(){
    this.authService.reqObject.accepted = true;
    this.authService.returnUpdatedRequest("accept");
  }

  logout(){
    this.authService.logout();
  }

  submit(){
    this.authService.reqObject.summary = this.rejectInput;
    this.authService.reqObject.date_complete = this.dateToday;
    this.authService.returnUpdatedRequest("reject");
  }

  ngOnInit() {
  }

}
