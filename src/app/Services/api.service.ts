import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAddress(pincode){
    return this.http.get(`https://api.postalpincode.in/pincode/${pincode}`);
  }
}
