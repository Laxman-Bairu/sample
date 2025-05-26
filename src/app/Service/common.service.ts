import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getData():Observable<any>{
    return this.http.get('assets/data.json')
  }
  GetByCode(code:any):Observable<any>{
      return this.http.get('http://localhost:3000/user' + '/' + code)
  }
  GetAll():Observable<any>{
    return this.http.get('http://localhost:3000/user')
  }
  ProceedRegister(inputdata:any):Observable<any>{
    return this.http.post('http://localhost:3000/user',inputdata)
  }
}
