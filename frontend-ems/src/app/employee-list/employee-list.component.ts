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
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((result: Employee[]) => {
      this.employees = result;
    });
    this.employeeService.getEmployeeByEmail(sessionStorage.getItem('user')).subscribe(res => {
      this.role = res.role.slice(5);
    });
  }

  get filteredEmployees(): Employee[] {
    if (!this.search) {
      return this.sortEmployees(this.employees);
    } else {
      const query = this.search.toLowerCase();
      const filtered = this.employees.filter(employee =>
        employee.firstName.toLowerCase().includes(query) ||
        employee.lastName.toLowerCase().includes(query) ||
        employee.role.toLowerCase().includes(query) ||
        employee.email.toLowerCase().includes(query)
      );
      return this.sortEmployees(filtered);
    }
  }

  private sortEmployees(employees: Employee[]): Employee[] {
    const activeEmployees = employees.filter(employee => employee.active);
    const nonActiveEmployees = employees.filter(employee => !employee.active);
    return [...activeEmployees, ...nonActiveEmployees];
  }

  showFullDetails(id: number): void {
    this.router.navigate(['/home-page/employee-details', id]);
  }
}
