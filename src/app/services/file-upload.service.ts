import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
  constructor(private http:HttpClient, private route: Router, private authservice:AuthService) { }

  reqObject: any;

  uploadFile(resultFile:File, resultSummary:string){
    this.reqObject = this.authservice.getReqObject();
    var completionDate: Date = new Date();
    
    const formData: FormData = this.authservice.getFormData();
    formData.set("accepted", "true");
    formData.set("status","COMPLETE");
    formData.set("summary",resultSummary);
    formData.set("date_complete",new Date().toISOString());
    
    return this.http.put<any>(`${environment.apiUrl+'api/v1/request/'+this.reqObject.access_code+"/"}`,formData);
  }

  

}
