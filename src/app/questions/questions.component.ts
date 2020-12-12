import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  data= [];

  constructor(
    public fb: FormBuilder,
    private httpService: HttpService
  ) { 
    /**this.http.get('http://0.0.0.0:8063/api/get/ubuntu/questions?api_key=kaipuLla401326',this.httpOptions).toPromise().then( data => {
      console.log(data);
    })**/
  }

  ngOnInit(): void {
    this.httpService.get().subscribe((ret: any[])=>{
      console.log(ret);
      this.data = ret;
      console.log(this.data);
    }) 
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

}
