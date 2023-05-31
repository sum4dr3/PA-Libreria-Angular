import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
     
  }   
  url ="http://localhost:9000/api/";

  headers: any = {
    'Content-Type':'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*'      
  };
  //Post options pass it to HttpHeaders Class 
  httpOptions = {
      headers: new HttpHeaders(this.headers),
  };

  consultar(){
    return this.http.get<any[]>(`${this.url}`+'libros')
  }

  consultarLibro(articulo:any){
    return this.http.post<any>(`${this.url}`+'autor', JSON.stringify(articulo) , this.httpOptions )
  }

  insertarlibro(articulo:any){
    return this.http.post<any>(`${this.url}`+'libros', JSON.stringify(articulo) , this.httpOptions )
  }
}
