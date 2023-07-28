import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }  

  public get<Object>(endPointUrl: string): Observable<Object> {
    const url = `${this.apiUrl}/${endPointUrl}`;
    return this.http.get<Object>(url);
  }

  public post<Object>(endPointUrl: string, user: string): Observable<Object> {
    const url = `${this.apiUrl}/${endPointUrl}`;
    return this.http.post<Object>(url, user);
  }
}
