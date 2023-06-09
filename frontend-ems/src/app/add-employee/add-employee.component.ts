import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../services/employee.service';
import { NewEmployee } from '../employee-details/new-employee.model';
import { Employee } from '../employee-details/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employees: Employee[];
  role: string;
  createdBy: number;
  newEmployee: NewEmployee = {
    empId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'employee',
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
    gender: '',
    active: true,
    martialStatus: 'Bachelor',
    dob: '',
    createdBy: 0
  };

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.employeeService.getEmployeeByEmail(sessionStorage.getItem('user')).subscribe(res => {
      this.role = res.role.slice(5);
      this.createdBy = res.id;
    });
  }

  showButton(): boolean{
    if(this.newEmployee.firstName==''||this.newEmployee.lastName==''||this.newEmployee.email==''||this.newEmployee.password==''||this.newEmployee.bloodGroup==''||this.newEmployee.gender==''||this.newEmployee.dob==''||this.newEmployee.address.addressLine1==''||this.newEmployee.address.addressLine2==''||this.newEmployee.address.city==''||this.newEmployee.address.pincode==''||this.newEmployee.address.state==''||this.newEmployee.contact.number==''){
      return false;
    }
    return true;
  }
  onSubmit(): void {
    this.newEmployee.createdBy = this.createdBy;
    console.log(this.newEmployee);
    this.employeeService.addEmployee(this.newEmployee).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/home-page/employee-list']);
    }, error => {
      console.log("Either empid or email exists");
    });
  }
}
