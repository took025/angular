import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Data } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private http: HttpClient) { }
  getData(): Observable<Data[]> {
    const url = this.baseUrl;
    return this.http.get<Data[]>(url);
  }

  getDataId(id: Number): Observable<Data> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<Data>(url);
  }
}
