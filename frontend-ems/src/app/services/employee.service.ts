import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee-details/employee.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  base_url="http://localhost:8080/employees";
  constructor(private http: HttpClient) { }
  getEmployeeByEmail(){
    let email = sessionStorage.getItem('user');
    return this.http.get<any>(`${this.base_url}/findByEmail/${email}`).pipe(map((res) => {
			console.log(res);
      return {empId:res.empId, firstName: res.firstName, lastName: res.lastName, email: res.email, role:res.role, bloodGroup:res.bloodGroup, gender:res.gender, martialStatus:res.martialStatus, dob:res.dob, 
        contact:{
          num: res.contact.number,
          type: res.contact.contactType
        },
        address:{
          addressLine1: res.address.addressLine1,
          addressLine2: res.address.addressLine2,
          city: res.address.city,
          state: res.address.state,
          pincode: res.address.pincode
        }
      };
		}));
  }
  getAll(){
    return this.http.get<any>(this.base_url + "/findAll").pipe(map((res)=>{
      console.log(res);
    }));
  }
}
