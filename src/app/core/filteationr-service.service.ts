import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilteationrServiceService implements OnInit{

  constructor(private _HttpClient:HttpClient ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  baseUrl:string = 'http://upskilling-egypt.com:3001/';


  register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'contact',userData)
  }

  getUsers(){
    return this._HttpClient.get('https://reqres.in/api/users?page=1');
  }

}
