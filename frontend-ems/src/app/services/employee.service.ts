import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  base_url="http://localhost:8080/employees";
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }
  getEmployeeByEmail(email: String){
    // let email = sessionStorage.getItem('user');
    return this.http.get<any>(`${this.base_url}/findByEmail/${email}`).pipe(map((res) => {
			console.log(res);
      return {id:res.id, empId:res.empId, firstName: res.firstName, lastName: res.lastName, email: res.email, role:res.role, bloodGroup:res.bloodGroup, gender:res.gender, martialStatus:res.martialStatus, dob:res.dob,active:res.active,createdBy:res.createdBy,createdOn: res.createdOn,updatedOn: res.updatedOn,
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
  getEmployeeById(id: number){
    return this.http.get<any>(`${this.base_url}/find/${id}`).pipe(map((res) => {
			// console.log(res);
      return {id:res.id, empId:res.empId, firstName: res.firstName, lastName: res.lastName, email: res.email, role:res.role, bloodGroup:res.bloodGroup, gender:res.gender, martialStatus:res.martialStatus, dob:res.dob,active:res.active,createdBy:res.createdBy,createdOn: res.createdOn,updatedOn: res.updatedOn,
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
    return this.http.get<any>(this.base_url + "/findAll").pipe(map((result)=>{
      // console.log(res);
      return result.map(res=> {
        return {id:res.id, empId:res.empId, firstName: res.firstName, lastName: res.lastName, email: res.email, role:res.role, bloodGroup:res.bloodGroup, gender:res.gender, martialStatus:res.martialStatus, dob:res.dob,active:res.active,createdBy:res.createdBy,createdOn: res.createdOn,updatedOn: res.updatedOn,
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
      });
    }));
  }
  deleteEmployee(id: number){
    this.http.delete<any>(this.base_url + "/delete/${id}");
    return this.router.navigate(['/home-page/employee-list']);
  }
}
