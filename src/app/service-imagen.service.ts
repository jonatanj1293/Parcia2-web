import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceImagenService {

  constructor(private http:HttpClient) {}

  public listImages () {
    return this.http.get('https://picsum.photos/v2/list?limit=100');
  } 
}
