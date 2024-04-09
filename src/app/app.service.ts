import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AppService {
  submitFeedback(value: any) {
    throw new Error('Method not implemented.');
  }                          
  baseurl = 'http://192.168.1.130:8088/';
  constructor(
    public http: HttpClient
  ) { }

  getheader() {
    var header = new HttpHeaders({
      'Accept': '*/*',
             
    })
    return header;
  }

  public postmethod(url: any, datas: any): Observable<any> {
    return this.http.post(this.baseurl + url, datas, { headers: this.getheader() });
    
  } 
  public getmethod(url: any): Observable<any> {
    let header = new HttpHeaders({ 'Accept': 'application/json' });
    header.set('Content-Type', 'application/json');
    const requestOptions = {  headers: header};
    // alert('here');
    return this.http.get(this.baseurl + url, requestOptions );
    
  }
}
