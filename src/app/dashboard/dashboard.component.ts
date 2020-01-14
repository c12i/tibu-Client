import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  request = {
    patient_name: "John Doe",
    doctor_name: "Dr. Jane Dutch",
    specimen: "Urine",
    patient_age: 30,
    patient_address: "Straight Outta Compton",
    symptoms: ["Arms are weak","Knees are heavy"],
    investigations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  }


}
