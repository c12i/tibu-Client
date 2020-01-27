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

    // const formData: FormData = new FormData();
    // formData.append("pdf_summary",resultFile,resultFile.name);
    var completionDate: Date = new Date();
    var status: string = "COMPLETE";

    this.reqObject.summary = resultSummary;
    this.reqObject.date_complete = completionDate;
    this.reqObject.status = status;
    //this.reqObject.pdf_summary = resultFile;
    return this.http.put<any>(`${environment.apiUrl+'api/v1/request/'+this.reqObject.access_code+"/"}`,this.reqObject);
  }

  

}
