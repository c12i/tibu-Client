import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

  summary: string;
  fileInput: File = null;
  failed: boolean = false;

  onFileSelected(event){
    this.fileInput = <File> event.target.files[0];
  }

  submitResults(form:NgForm){
    if(this.summary == undefined || this.summary.trim() == ""){
      this.summary = "not inserted";
    }

    this.fileupload.uploadFile(this.fileInput,this.summary).subscribe(res=>{
      this.failed = false;
      this.router.navigate(['dashboard']); //TODO: find a better place to redirect user after submission
    }, error=>{
      this.failed = true;
      console.log("upload error: "+error);
    });

    form.reset();
  }

  constructor(private router:Router, private fileupload:FileUploadService) { }

  ngOnInit() {
  }

}
