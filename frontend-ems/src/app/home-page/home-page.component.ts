import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  username: String="";
  sidebarOpened = false;
  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.getEmployeeByEmail()
    .subscribe(
      (res)=>{
        console.log(res);
        this.username = res.firstName;
        return res;
      }
    );
  }  
}
