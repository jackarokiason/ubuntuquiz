import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get("http://0.0.0.0:8063/api/get/ubuntu/questions?api_key=kaipuLla401326");
  }
}
