import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Patient } from '../class/patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService, private route: Router) {
  }

  req: any;
  doctor: any;

  request = {
    patient_name: sessionStorage.getItem("pat_name"),
    doctor_name: sessionStorage.getItem("doc_name"),
    specimen: sessionStorage.getItem("pat_specimen"),
    patient_age: sessionStorage.getItem("pat_age"),
    patient_address: sessionStorage.getItem("pat_address"),
    symptoms: ["Vomitting","High Fever","Diarrhoea"],
    investigations: "Test the sample provided for Malaria"
  }

  ngOnInit() {
  }

}
