import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  employee: Employee;
  createdBy: String;
  id: number;
  active: String;
  constructor(private employeeService : EmployeeService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      this.id=+param['id'];
    });
    // console.log(this.id);
    let email = sessionStorage.getItem('user');
    this.employeeService.getEmployeeById(this.id).subscribe((emp)=>{
      this.employee = emp;
      this.active = emp.active==true?'Active':'Not Active';
      // this.createdById = emp.createdBy;
      // console.log(this.createdById);
      this.employeeService.getEmployeeById(emp.createdBy).subscribe((emp1)=>{
        this.createdBy = emp1.firstName + " " + emp1.lastName;
      });
    });
  }
  deleteEmployee(){
    this.employeeService.deleteEmployee(this.id);
  }
}
