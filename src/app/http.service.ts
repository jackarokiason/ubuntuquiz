import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private httpClient: HttpClient) { }
  
  /**
  getquestions(): Observable<any>{
    return this.httpClient.get('http://0.0.0.0:8063/api/get/ubuntu/questions?api_key=kaipuLla401326')
  }*/

}
