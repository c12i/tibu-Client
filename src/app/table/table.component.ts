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
  showModal: boolean;
  dateToday = new Date();

  request = {
    from: sessionStorage.getItem("pat_name"),
    specimen: this.authService.reqObject.specimen,
    collected_at: sessionStorage.getItem("picked_at")
  }

  acceptRequest(){
    this.authService.returnUpdatedRequest("accept","");
  }

  logout(){
    this.authService.logout();
  }

  rejectSubmit(){
    this.authService.returnUpdatedRequest("reject",this.rejectInput);
  }

  ngOnInit() {
  }

}
