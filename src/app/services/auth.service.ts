import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pipe, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Patient } from '../class/patient';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route: Router) { 
  }

  
  private reqHeader = {headers: new HttpHeaders()
    .set('Content-Type', 'application/json')}
  private currentUser: any;
  reqObject: any;
  private request_doctor: any;
  private request_rider: any;
  /* request_patient = {
    name: "",
    age: "",
    mobile: "",
    address: "",
    symptoms: "",
    investigations: "",
    specimen: ""
  } */


  /*-------------- Login/Logout --------------*/
  public login(user: any) {
    return this.http.post<any>(`${environment.apiUrl+'api/v1/auth/'}`,user, this.reqHeader);
  }

  public logout(){
    //Get logout endpoint
    this.currentUser = null;
    this.reqObject = null;
    localStorage.removeItem("mmd_token");
    this.clearSessionStorage();
    this.route.navigate(['login']);
  }

  public isLoggedIn(){
    return !!localStorage.getItem("mmd_token");
  }

 

  /*-------------- Request Verification --------------*/
  public fetchRequestDetails(reqId:any){
    return this.http.get<any>(`${environment.apiUrl+'api/v1/request/'+reqId}`);
  }

  /*-------------- Request Accept --------------*/
  public returnUpdatedRequest(type:string){
    //accepted request
    if(type == "accept"){
        this.http.put<any>(`${environment.apiUrl+'api/v1/request/'+this.reqObject.access_code+"/"}`,this.reqObject)
      .subscribe(request=>{
        this.route.navigate(['dashboard']);
      },error=>{
        console.log(error)
      });
    }

    //rejected request
    if(type == "reject"){
      this.http.put<any>(`${environment.apiUrl+'api/v1/request/'+this.reqObject.access_code+"/"}`,this.reqObject)
      .subscribe(request=>{
        this.logout();
      },error=>{
        console.log(error)
      });
    }
    
  }

/*-------------- Setters & Getters --------------*/
  public getCurrentUser(){
    return this.currentUser;
  }

  public setCurrentUser(user:any){
    this.currentUser = user;
  }

  public getToken(){
    return localStorage.getItem("mmd_token");
  }

  public setDoctor(reqDoc:any){
    this.request_doctor = reqDoc;
  }

  public setRider(reqRider:any){
    this.request_rider = reqRider;
  }

  public setReqObject(requestObj:any){
    this.reqObject = requestObj;
  }

  public getReqObject(){
    return this.reqObject;
  }
    
  public getDoctor(){
    return this.request_doctor;
  }

  public getRider(){
    return this.request_rider;
  }  

  public setSessionStorage(req: any){
    sessionStorage.setItem("doc_name","Dr. "+req.doctor.first_name+" "+req.doctor.last_name);
    sessionStorage.setItem("pat_name",req.patient_name);
    sessionStorage.setItem("pat_age",req.patient_age);
    //sessionStorage.setItem("pat_mobile",req.patient_mobile);
    sessionStorage.setItem("pat_address",req.patient_address);
    sessionStorage.setItem("pat_symptoms",req.symptoms);
    sessionStorage.setItem("pat_investigations",req.investigations);
    sessionStorage.setItem("pat_specimen",req.specimen);
    sessionStorage.setItem("picked_at",req.picked_at);
  }

  private clearSessionStorage(){
    sessionStorage.removeItem("doc_name");
      sessionStorage.removeItem("pat_name");
      sessionStorage.removeItem("pat_age");
      //sessionStorage.removeItem("pat_mobile");
      sessionStorage.removeItem("pat_address");
      sessionStorage.removeItem("pat_symptoms");
      sessionStorage.removeItem("pat_investigations");
      sessionStorage.removeItem("pat_specimen");
      sessionStorage.removeItem("picked_at");
  }

}
