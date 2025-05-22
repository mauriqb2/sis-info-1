import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http:///localhost:3000'

  constructor(private http:HttpClient) { }

  getUser():Observable<any> {
    return this.http.get(`${this.apiURL}/user`)
  }

  createUser(user: any) {
    return this.http.post(`${this.apiURL}/user`, user)
  }
}
