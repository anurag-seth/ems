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
  constructor(private employeeService : EmployeeService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.employeeService.getEmployeeByEmail().subscribe((emp)=>{
      this.employee = emp;
      this.employee.role = emp.role.slice(5);
    });
    this.employeeService.getAll().subscribe();
  }
}
