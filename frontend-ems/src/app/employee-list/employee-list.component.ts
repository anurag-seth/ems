import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-details/employee.model';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  role: string;
  search: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((result: Employee[]) => {
      this.employees = result;
      console.log(result);
    });
    this.employeeService.getEmployeeByEmail(sessionStorage.getItem('user')).subscribe(res => {
      this.role = res.role.slice(5);
    });
  }

  get filteredEmployees(): Employee[] {
    if (!this.search) {
      return this.employees;
    } else {
      const query = this.search.toLowerCase();
      return this.employees.filter(employee =>
        employee.firstName.toLowerCase().includes(query) ||
        employee.lastName.toLowerCase().includes(query) ||
        employee.role.toLowerCase().includes(query) ||
        employee.email.toLowerCase().includes(query)
      );
    }
  }

  showFullDetails(id: number): void {
    console.log(id);
    this.router.navigate(['/home-page/employee-details', id]);
  }
}
