import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  reqObject: any;

  constructor(private http:HttpClient, private route: Router, private authservice:AuthService) { 
    
  }


  uploadFile(resultFile:File, resultSummary:string){
    this.reqObject = this.authservice.getReqObject();
    var completionDate: Date = new Date();
    var status: string = "COMPLETE";
    
    const formData: FormData = new FormData();
    formData.append("pdf_summary",resultFile,resultFile.name);
    formData.append("patient_name",this.reqObject.patient_name);
    formData.append("patient_age",this.reqObject.patient_age);
    formData.append("patient_mobile",this.reqObject.patient_mobile);
    formData.append("patient_address",this.reqObject.patient_address);
    formData.append("symptoms",this.reqObject.symptoms);
    formData.append("investigations",this.reqObject.investigations);
    formData.append("specimen",this.reqObject.specimen);
    formData.append("summary",resultSummary);
    formData.append("status",status);
    //formData.append("date_complete",completionDate);

    return this.http.put<any>(`${environment.apiUrl+'api/v1/request/'+this.reqObject.access_code+"/"}`,formData);
  }

  

}
