import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpm: HttpClient,) { }

  registerClient(signupRequestDTO:any): Observable<any>{
    return this.httpm.post(BASIC_URL + "client/sign-up", signupRequestDTO );
  }

  registerCompany(signupRequestDTO:any): Observable<any>{
    return this.httpm.post(BASIC_URL + "company/sign-up", signupRequestDTO );
  }

}
