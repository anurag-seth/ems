import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-details/employee.model';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[];
  role:String;
  constructor(private employeeService : EmployeeService,
              private router: Router, 
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((result:Employee[])=>{
      this.employees=result;
      // console.log(result);
    });
    this.employeeService.getEmployeeByEmail(sessionStorage.getItem('user')).subscribe(res=>{
      this.role = res.role.slice(5);
    });
  }
  showFullDetails(id){
    console.log(id);
    this.router.navigate(['/home-page/employee-details',id]);
  }
}
