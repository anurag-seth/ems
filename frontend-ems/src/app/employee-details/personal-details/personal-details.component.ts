import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  employee: Employee;
  constructor(private employeeService : EmployeeService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    let email = sessionStorage.getItem('user');
    this.employeeService.getEmployeeByEmail(email).subscribe((emp)=>{
      this.employee = emp;
      this.employee.role = emp.role.slice(5);
    });
    // this.employeeService.getAll().subscribe();
  }
}
