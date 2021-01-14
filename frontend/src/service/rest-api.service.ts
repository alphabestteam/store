import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  configUrl="http://localhost:8000/api"
  constructor(private http: HttpClient) { }

  register(costumer:Object): Observable<Object>{
    console.log(costumer)
    return this.http.post(`${this.configUrl}/register/`,costumer)
  }

  login(costumer:Object): Observable<Object>{
    console.log(costumer)
    return this.http.post(`${this.configUrl}/login/`,costumer)
  }
}
