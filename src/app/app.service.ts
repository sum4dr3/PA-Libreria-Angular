import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
     
  }   
  url ="http://localhost:9000/api/libros/";

  headers: any = {
    'Content-Type':'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*'      
  };
  //Post options pass it to HttpHeaders Class 
  httpOptions = {
      headers: new HttpHeaders(this.headers),
  };

  consultar(){
    return this.http.get(`${this.url}`)
  }
}
