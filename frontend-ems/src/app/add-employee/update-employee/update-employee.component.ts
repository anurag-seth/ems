import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee-details/employee.model';
import { NewEmployee } from 'src/app/employee-details/new-employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  employee: Employee;
  role:String;
  id: number;
  createdBy:String;
  newEmployee: Employee;
  constructor(private employeeService : EmployeeService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      this.id=+param['id'];
    });
    this.employeeService.getEmployeeById(this.id).subscribe((emp1)=>{
      this.employee = emp1;
      this.newEmployee = emp1;
      this.newEmployee.role = emp1.role.slice(5);
      this.employee.role = emp1.role;
      this.employeeService.getEmployeeByEmail(sessionStorage.getItem('user')).subscribe(res => {
        this.role = res.role.slice(5);
      });
      this.employeeService.getEmployeeById(emp1.createdBy).subscribe((emp2)=>{
        this.createdBy = emp2.firstName + " " + emp2.lastName;
      });
    });
  }

  onSubmit(): void {
    
    console.log(this.newEmployee);
    this.employeeService.updateEmployee(this.newEmployee).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/home-page/employee-details',this.newEmployee.id]);
    }, error => {
      console.log("Either empid or email exists");
    });
  }

}
