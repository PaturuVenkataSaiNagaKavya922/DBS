import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 

 @Injectable({
  providedIn: 'root'
})
export class  PaymentsService {
    private baseUrl = 'http://localhost:8086' ;
    Sender: any;
  
    constructor(private http: HttpClient) { }

  //calling the service of create student from backend
    sender(sender: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, sender);
    }
    
    transferdetails(transferdetails: Object):Observable<Object>{
          return this.http.post(`${this.baseUrl}`, transferdetails)
    }
//export  class ReceiverService {

  //  private baseUrl = 'http://localhost:8086' ;
    //Receiver:any;

   // constructor( private http: HttpClient){ }
    receiver(receiver:Object): Observable<Object> {
    return this.http.get(`${this.baseUrl}`, receiver);
    }
  }

  

    ///Receiver(receiver:Object): Observable<Object> {
   // return this.http.post(`${this.baseUrl}`, receiver);
    //}


