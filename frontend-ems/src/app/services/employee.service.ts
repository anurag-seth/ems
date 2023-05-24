import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  base_url="http://localhost:8080/employees";
  constructor(private http: HttpClient) { }
  getEmployeeByEmail(){
    let email = sessionStorage.getItem('user');
    return this.http.get<any>(`${this.base_url}/findByEmail/${email}`);
  }
}
