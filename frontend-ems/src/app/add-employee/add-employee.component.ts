import { Component } from '@angular/core';

import { EmployeeService } from '../services/employee.service';
import { NewEmployee } from '../employee-details/new-employee.model';
import { Employee } from '../employee-details/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{
  employees: Employee[];
  newEmployee: NewEmployee = {
    empId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: ''
    },
    contact: {
      contactType: 'personal',
      number: '',
      active: true
    },
    bloodGroup: '',
    gender: 'Male',
    active: true,
    martialStatus: 'Bachelor',
    dob: '',
    createdBy: 3
  };

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  onSubmit(): void {
    // this.employeeService.getAll().subscribe((res:Employee[])=>{
    //   // console.log(res.length);
    //   this.newEmployee.empId = res.length + 1;
    //   console.log(this.newEmployee.empId);
    // });
    // this.employeeService.getAll().subscribe((result: Employee[]) => {
    //   // this.employees = result;
    //   console.log(5);
    // });
    this.employeeService.addEmployee(this.newEmployee).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/home-page/employee-list']);
      // Handle success or redirect to employee list
    }, error => {
      // Handle error
      console.log(error);
    });
  }
}
