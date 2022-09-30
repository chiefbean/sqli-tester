import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  sendQuery(query: string, url: string) {
    return this.http.post<QueryResponse>(url, JSON.stringify({query: query}), this.httpOptions);
  }
}

export interface QueryResponse {
  output: string;
  query: string;
}
