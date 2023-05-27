import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  role: String;
  constructor(private employeeService: EmployeeService,
              private router: Router, 
              private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.employeeService.getEmployeeByEmail(sessionStorage.getItem('user')).subscribe(res=>{
      this.role =res.role.slice(5);
      console.log(this.role);
    });
  }
  personalDetails(){
    let email = sessionStorage.getItem('user');
    // this.router.navigate(['/home-page/personal-details'], email);
  }
}

