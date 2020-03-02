import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwosrvService {

  // private ApiURL: string = 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1';
  private ApiURL: string = ' https://api.github.com';
  constructor(private httpclient: HttpClient) {}

  getToDos(): Observable<any> {
    return this.httpclient.get<any>(this.ApiURL);
  }
  createToDos(test: any): Observable<any> {
    return this.httpclient.get<any>(this.ApiURL);
  }

}
