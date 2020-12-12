import { Component, OnInit } from '@angular/core';
import{HttpService} from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Api} from '../classes/api';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  data:any = []

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }
  
  //lstapi:Api[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit(): void {

    /**
    this.httpService.getquestions()
    .subscribe(
      data=>{
        this.lstapi=data;
      }

    );
    */


    this.http.get('http://0.0.0.0:8063/api/get/ubuntu/questions?api_key=kaipuLla401326',this.httpOptions).subscribe( 
      (res) => {
        this.data = res
        console.log(this.data)
      },
      (error) => console.log(error)
    )
  } 

}
