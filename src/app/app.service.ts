import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  view_details=[]
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
    const requestOptions = { headers: header };
    return this.http.get(this.baseurl + url, requestOptions);
  }
}
