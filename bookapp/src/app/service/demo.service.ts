import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  url="https://jsonplaceholder.typicode.com/users"
  constructor(private httpClient:HttpClient) { }


  getUser():Observable<any>{
    return this.httpClient.get<any>(this.url);
  }
}
